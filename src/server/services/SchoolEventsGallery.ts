import { type GalleryFolder, type GalleryImage } from "@prisma/client";

import { db } from "@/src/server/db";
import { toKebabCase } from "@/src/utils/string";
import S3 from "./AWS/S3";

const s3 = S3.getInstance();

/**
 * Retrieves gallery folders with their respective signed thumbnail URLs if they exist.
 * @returns An array of objects containing folder information and their signed thumbnail URLs.
 */
export const getGalleryFoldersWithSignedThumbnailUrls = async () => {
    const folders = await db.galleryFolder.findMany({
        include: { _count: true, thumbnail: { select: { filename: true } } },
    });

    // get signed url for thumbnail of each folder
    return await Promise.all(
        folders.map(async folder => ({
            id: folder.id,
            name: folder.name,
            imgCount: folder._count.images,
            createdAt: folder.createdAt,
            thumbnail: folder.thumbnail
                ? await s3.createGetObjectPresignedUrl(
                      {
                          Key: createGalleryImgS3Path(
                              folder.name,
                              folder.thumbnail.filename,
                          ),
                      },
                      60 * 2,
                  )
                : null,
        })),
    );
};

/**
 * Retrieves images from the db for a given folder name and returns an array of objects containing the image id and its signed src URL.
 * @param folderName - The name of the folder containing the images.
 * @returns An array of objects containing the image id and its signed URL.
 */
export const getImagesByFolderNameWithSignedUrl = async (
    folderName: string,
) => {
    // fetch images from db
    const images = await db.galleryImage.findMany({
        where: { folder: { name: folderName } },
        select: { id: true, filename: true },
    });

    // get signed url for each image
    return await Promise.all(
        images.map(async image => ({
            id: image.id,
            src: await s3.createGetObjectPresignedUrl({
                Key: createGalleryImgS3Path(folderName, image.filename),
            }),
        })),
    );
};

/**
 * Creates an S3 path for a school event gallery image.
 * @param folderName - The name of the folder containing the image.
 * @param imageName - The name of the image.
 * @returns The S3 path for the image.
 */
export const createGalleryImgS3Path = (
    folderName: string,
    imageName: string,
): string => {
    return `gallery/${toKebabCase(folderName)}/${imageName}`;
};

/**
 * Extracts folder name and image name from S3 path.
 * @param s3Path - The S3 path to extract information from.
 * @returns An object containing folder name and image name.
 */
export const getGalleryInfoFromS3Path = (s3Path: string) => {
    const [folderName, imgName] = s3Path.split("/").slice(1);
    return { folderName: folderName!, imgName: imgName! };
};

/**
 * Creates a new gallery folder with the given name and optional thumbnail image.
 * @param folderName - The name of the folder to be created.
 * @param thumbnailFileName - The name of the thumbnail image file to be associated with the folder as saved in S3.
 * @returns A promise that resolves to the created gallery folder object.
 */
export const createGalleryFolder = async (
    folderName: string,
    thumbnailFileName?: string,
) => {
    // change the folder name to kebab case
    const kebabCaseName = toKebabCase(folderName);

    return await db.$transaction(async tx => {
        // create gallery folder
        const createdFolder: GalleryFolder & { thumbnail?: GalleryImage } =
            await tx.galleryFolder.create({ data: { name: kebabCaseName } });

        // if thumbnail file name is provided, update thumbnail
        if (thumbnailFileName) {
            const createdThumbnail = await tx.galleryImage.create({
                data: {
                    filename: thumbnailFileName,
                    folder: { connect: { name: kebabCaseName } },
                    thumbnailFor: { connect: { name: kebabCaseName } },
                },
            });
            createdFolder.thumbnail = createdThumbnail;
        }

        return createdFolder;
    });
};

export const addImageToFolder = async (
    folderName: string,
    imageFileName: string,
) => {
    // create image in db
    return await db.galleryImage.create({
        data: {
            filename: imageFileName,
            folder: { connect: { name: folderName } },
        },
    });
};

export const addImagesToFolder = async (
    folderName: string,
    images: string[],
) => {
    return await db.$transaction(async tx => {
        const folder = await tx.galleryFolder.findUnique({
            where: { name: folderName },
            select: { id: true },
        });
        if (!folder) throw new Error("Folder not found");

        // create images and connect them to folder
        return await tx.galleryImage.createMany({
            data: images.map(img => ({
                filename: img,
                folderId: folder.id,
            })),
        });
    });
};
