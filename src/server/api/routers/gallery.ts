import {
    addImageToFolder,
    addImagesToFolder,
    createGalleryFolder,
    createGalleryImgS3Path,
    getGalleryInfoFromS3Path,
} from "@/src/services/SchoolEventsGallery";
import { createTRPCRouter, publicProcedure } from "../trpc";

import S3 from "@/src/services/AWS/S3";
import { type PresignedPost } from "@aws-sdk/s3-presigned-post";
import { TRPCError } from "@trpc/server";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const UPLOAD_LINK_EXPIRE_TIME = 60 * 2; // 120 seconds
const UPLOAD_MAX_IMG_SIZE = 1024 * 1024 * 5; // 5MB

export const galleryRouter = createTRPCRouter({
    createImgPresignedPost: publicProcedure
        .input(
            z.object({
                folderName: z.string().min(1),
                newFolder: z.boolean(),
                fileType: z
                    .string()
                    .refine(
                        type => ["image/png", "image/jpeg"].includes(type),
                        "Invalid file type, only PNG and JPEG allowed",
                    ),
                fileSize: z
                    .number()
                    .max(UPLOAD_MAX_IMG_SIZE, "File size too large"),
            }),
        )
        .mutation(
            async ({
                input: { fileType, fileSize, folderName, newFolder },
                ctx: { db },
            }) => {
                if (!newFolder) {
                    // check if the folder exists in the db
                    const folders = await db.galleryFolder.findMany({
                        where: { name: folderName },
                        select: { name: true },
                    });
                    const folderExists = !!folders.find(
                        folder => folder.name === folderName,
                    );
                    if (!folderExists)
                        throw new TRPCError({
                            code: "BAD_REQUEST",
                            message: "No gallery folder with such name exists",
                        });
                }

                const imgUniqueName = uuid();
                const s3Path = createGalleryImgS3Path(
                    folderName,
                    imgUniqueName,
                );

                let presignedPost: PresignedPost;
                try {
                    presignedPost =
                        await S3.getInstance().createPresignedObjPost({
                            Key: s3Path,
                            Expires: UPLOAD_LINK_EXPIRE_TIME,
                            Conditions: [
                                ["starts-with", "$Content-Type", fileType],
                                ["content-length-range", 1, fileSize],
                            ],
                        });
                } catch (err) {
                    console.error(
                        `Error while creating presigned post for image upload: ${
                            (err as Error).message
                        }`,
                    );
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Error creating presigned post",
                    });
                }

                // create transaction record
                const newTransaction = await db.s3UploadTransaction.create({
                    data: { s3Path },
                    select: { id: true },
                });

                return {
                    presignedPost,
                    transactionId: newTransaction.id,
                };
            },
        ),

    createGalleryFolder: publicProcedure
        .input(
            z.object({
                folderName: z.string().min(1),
                thumbnailTransactionId: z.string().cuid().optional(),
            }),
        )
        .mutation(
            async ({
                input: { folderName, thumbnailTransactionId },
                ctx: { db },
            }) => {
                if (!thumbnailTransactionId) {
                    try {
                        // create gallery folder without thumbnail
                        await createGalleryFolder(folderName);
                    } catch (err) {
                        console.error(
                            `Error while creating gallery folder with name "${folderName}": ${
                                (err as Error).message
                            }`,
                        );
                        throw new TRPCError({
                            code: "INTERNAL_SERVER_ERROR",
                            message: "Error creating gallery folder",
                        });
                    }
                    return;
                }

                // verify that transaction exists
                const transaction = await db.s3UploadTransaction.findUnique({
                    where: { id: thumbnailTransactionId },
                });
                if (!transaction)
                    throw new TRPCError({
                        code: "NOT_FOUND",
                        message: "No transaction found with provided id",
                    });

                try {
                    const { imgName } = getGalleryInfoFromS3Path(
                        transaction.s3Path,
                    );
                    await createGalleryFolder(folderName, imgName);
                } catch (err) {
                    console.error(
                        `Error while creating gallery folder with name "${folderName}": ${
                            (err as Error).message
                        }`,
                    );
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Error creating gallery folder",
                    });
                }

                // delete transaction record signifying successful transaction
                await db.s3UploadTransaction.delete({
                    where: { id: thumbnailTransactionId },
                });
            },
        ),

    addImageToGalleryFolder: publicProcedure
        .input(
            z.object({
                folderName: z.string().min(1),
                imageTransactionId: z.string().cuid(),
            }),
        )
        .mutation(
            async ({
                input: { folderName, imageTransactionId },
                ctx: { db },
            }) => {
                // verify that transaction exists
                const transaction = await db.s3UploadTransaction.findUnique({
                    where: { id: imageTransactionId },
                });
                if (!transaction)
                    throw new TRPCError({
                        code: "NOT_FOUND",
                        message: "No transaction found with provided id",
                    });

                try {
                    const { imgName } = getGalleryInfoFromS3Path(
                        transaction.s3Path,
                    );
                    await addImageToFolder(folderName, imgName);
                } catch (err) {
                    console.error(
                        `Error while adding image to gallery folder "${folderName}": ${
                            (err as Error).message
                        }`,
                    );
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Error adding image to gallery folder",
                    });
                }

                // delete transaction record signifying successful transaction
                await db.s3UploadTransaction.delete({
                    where: { id: imageTransactionId },
                });
            },
        ),
    createImagesPresignedPost: publicProcedure
        .input(
            z.object({
                folderName: z.string().min(1),
                images: z
                    .array(
                        z.object({
                            key: z.string().min(1),
                            fileType: z
                                .string()
                                .refine(
                                    type =>
                                        ["image/png", "image/jpeg"].includes(
                                            type,
                                        ),
                                    "Invalid file type, only PNG and JPEG allowed",
                                ),
                            fileSize: z
                                .number()
                                .max(
                                    UPLOAD_MAX_IMG_SIZE,
                                    "File size too large",
                                ),
                        }),
                    )
                    .max(50, "Too many images")
                    .refine(images => {
                        const uniqueKeys = new Set<string>();
                        for (const image of images) {
                            if (uniqueKeys.has(image.key)) return false; // duplicate key found
                            uniqueKeys.add(image.key);
                        }
                        return true; // all keys are unique
                    }, "Duplicate keys found"),
            }),
        )
        .mutation(async ({ input: { folderName, images }, ctx: { db } }) => {
            const presignedPostWithTransactions = await Promise.all(
                images.map(async image => {
                    const imgUniqueName = uuid();
                    const s3Path = createGalleryImgS3Path(
                        folderName,
                        imgUniqueName,
                    );

                    try {
                        return {
                            key: image.key,
                            transaction: {
                                id: uuid(),
                                s3Path,
                            },
                            presignedPost:
                                await S3.getInstance().createPresignedObjPost({
                                    Key: s3Path,
                                    Expires: UPLOAD_LINK_EXPIRE_TIME,
                                    Conditions: [
                                        [
                                            "starts-with",
                                            "$Content-Type",
                                            image.fileType,
                                        ],
                                        [
                                            "content-length-range",
                                            1,
                                            image.fileSize,
                                        ],
                                    ],
                                }),
                        };
                    } catch (err) {
                        throw new TRPCError({
                            code: "INTERNAL_SERVER_ERROR",
                            message: "Error creating presigned post",
                        });
                    }
                }),
            );
            try {
                await db.s3UploadTransaction.createMany({
                    data: presignedPostWithTransactions.map(
                        ({ transaction }) => ({
                            ...transaction,
                        }),
                    ),
                });
            } catch (err) {
                console.error(
                    `Error while creating transactions for images: ${
                        (err as Error).message
                    }`,
                );
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Error creating transactions for images",
                });
            }
            return presignedPostWithTransactions.map(
                ({ key, presignedPost, transaction }) => ({
                    key,
                    presignedPost,
                    transactionId: transaction.id,
                }),
            );
        }),
    addImagesToFolder: publicProcedure
        .input(
            z.object({
                folderName: z.string().min(1),
                transactionIds: z.array(z.string().min(1)),
            }),
        )
        .mutation(
            async ({ input: { folderName, transactionIds }, ctx: { db } }) => {
                const transactions = await db.s3UploadTransaction.findMany({
                    where: { id: { in: transactionIds } },
                });
                if (transactions.length !== transactionIds.length)
                    throw new TRPCError({
                        code: "BAD_REQUEST",
                        message: "Some of the transactions do not exist",
                    });

                try {
                    await addImagesToFolder(
                        folderName,
                        transactions.map(
                            t => getGalleryInfoFromS3Path(t.s3Path).imgName,
                        ),
                    );
                } catch (err) {
                    console.error(
                        `Error while adding images to gallery folder "${folderName}": ${
                            (err as Error).message
                        }`,
                    );
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Error adding images to gallery folder",
                    });
                }

                // delete transaction records signifying successful transactions
                await db.s3UploadTransaction.deleteMany({
                    where: { id: { in: transactionIds } },
                });
            },
        ),
});
