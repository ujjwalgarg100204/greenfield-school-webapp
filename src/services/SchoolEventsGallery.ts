import type { GalleryFolder } from "@prisma/client";
import S3 from "./AWS/S3";
import { db } from "@/src/server/db";

class SchoolEventsGallery {
  private s3Instance: S3;

  constructor() {
    this.s3Instance = S3.getInstance();
  }

  getGalleryFolders = async () => {
    // fetch folders from db
    const folders = await db.galleryFolder.findMany({
      include: { _count: true },
    });

    // get signed url for thumbnail of each folder
    return await Promise.all(
      folders.map(async folder => ({
        ...folder,
        thumbnail: await this.s3Instance.getObjectPresignedUrl({
          Key: SchoolEventsGallery.createS3BucketImagePath(
            folder.name,
            folder.thumbnail,
          ),
        }),
      })),
    );
  };

  getImagesByFolderName = async (folderName: GalleryFolder["name"]) => {
    // fetch images from db
    const images = await db.galleryImage.findMany({
      where: { folder: { name: folderName } },
    });

    // get signed url for each image
    return await Promise.all(
      images.map(async image => ({
        ...image,
        url: await this.s3Instance.getObjectPresignedUrl({
          Key: SchoolEventsGallery.createS3BucketImagePath(
            folderName,
            image.filename,
          ),
        }),
      })),
    );
  };

  private static createS3BucketImagePath = (
    folderName: string,
    imageName: string,
  ): string => {
    return `gallery/${folderName}/${imageName}`;
  };
}

export default SchoolEventsGallery;
