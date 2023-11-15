import BatchUploadImagesForm from "./form";
import type { FC } from "react";
import { db } from "@/src/server/db";

const BatchUploadImagesToGalleryTestPage: FC = async () => {
  const galleryFolders = await db.galleryFolder.findMany({
    select: { name: true, id: true },
  });
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Batch Upload Images to Gallery
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <BatchUploadImagesForm folders={galleryFolders} />
      </div>
    </div>
  );
};

export default BatchUploadImagesToGalleryTestPage;
