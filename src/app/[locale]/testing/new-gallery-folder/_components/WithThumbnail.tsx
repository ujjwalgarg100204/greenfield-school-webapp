"use client";

import { Input } from "@/src/app/_lib/next-ui";
import { api } from "@/src/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { uploadFileToS3 } from "../../utils";

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];
const MB_BYTES = 1024 * 1024;
const UPLOAD_MAX_IMG_SIZE = MB_BYTES * 5; // 5MB

const NewFolderWithThumbnailSchema = z.object({
    folderName: z.string().min(1),
    thumbnailImg: z
        .custom<FileList>(data => data && data instanceof FileList)
        .superRefine((data, ctx) => {
            if (!data)
                return ctx.addIssue({
                    code: "custom",
                    message: "Must be a file",
                });

            if (data.length === 0)
                return ctx.addIssue({
                    code: "too_small",
                    minimum: 1,
                    inclusive: true,
                    message: "1 file must be provided, but none were provided",
                    type: "array",
                });
            else if (data.length > 1)
                return ctx.addIssue({
                    code: "too_big",
                    maximum: 1,
                    inclusive: true,
                    type: "array",
                    message: `Only 1 file has to be provided, but ${data.length} were provided`,
                });

            const file = data[0]!;
            if (!ACCEPTED_FILE_TYPES.includes(file.type))
                return ctx.addIssue({
                    code: "custom",
                    message: `File must be one of [${ACCEPTED_FILE_TYPES.join(
                        ", ",
                    )}] but was ${file.type}`,
                });
            if (file.size > UPLOAD_MAX_IMG_SIZE) {
                return ctx.addIssue({
                    code: "too_big",
                    type: "array",
                    message: `The file must not be larger than 5 MB: ${(
                        file.size / MB_BYTES
                    ).toPrecision(2)} MB`,
                    maximum: UPLOAD_MAX_IMG_SIZE,
                    inclusive: true,
                });
            }
        }),
});

const WithThumbnail: FC = () => {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<z.infer<typeof NewFolderWithThumbnailSchema>>({
        resolver: zodResolver(NewFolderWithThumbnailSchema),
    });

    const imgPresignedPostMutation =
        api.gallery.createImgPresignedPost.useMutation();
    const createGalleryFolderMutation =
        api.gallery.createGalleryFolder.useMutation();

    const handleFormSubmission = async ({
        folderName,
        thumbnailImg,
    }: z.infer<typeof NewFolderWithThumbnailSchema>) => {
        const { presignedPost, transactionId } =
            await imgPresignedPostMutation.mutateAsync({
                folderName,
                fileSize: thumbnailImg[0]!.size,
                fileType: thumbnailImg[0]!.type,
                newFolder: true,
            });

        await uploadFileToS3({
            signedImgUpload: presignedPost,
            file: thumbnailImg[0]!,
        });

        await createGalleryFolderMutation.mutateAsync({
            folderName,
            thumbnailTransactionId: transactionId,
        });

        // reset inputs
        reset();
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                className="space-y-10"
                onSubmit={handleSubmit(
                    async data =>
                        await toast.promise(handleFormSubmission(data), {
                            loading: "Creating new folder...",
                            success: "Folder created successfully",
                            error: "Failed to create folder",
                        }),
                )}
            >
                <Input
                    type="text"
                    radius="sm"
                    label="Folder Name"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.folderName}
                    errorMessage={errors.folderName?.message}
                    placeholder="Enter new folder name"
                    {...register("folderName")}
                />
                <Input
                    type="file"
                    radius="sm"
                    label="Thumbnail"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.thumbnailImg}
                    errorMessage={errors.thumbnailImg?.message}
                    placeholder="Add a thumbnail image"
                    accept="image/jpeg,image/png"
                    {...register("thumbnailImg")}
                />
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create New Folder
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WithThumbnail;
