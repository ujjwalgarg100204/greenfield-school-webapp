import { db } from "@/src/server/db";
import type { FC } from "react";
import SinglePageTabs from "../../(main-public)/_components/SinglePageTabs";
import MultipleImages from "./_components/MultipleImages";
import SingleImage from "./_components/SingleImage";
import UploadFolder from "./_components/UploadFolder";

const UploadImagesToGalleryPage: FC = async () => {
    const galleryFolders = await db.galleryFolder.findMany({
        select: { name: true, id: true },
    });
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center gap-4 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Upload Images to Gallery
                </h2>
            </div>

            <div className="mx-auto">
                <SinglePageTabs
                    tabs={[
                        {
                            key: "single-image",
                            title: "Single Page",
                            component: <SingleImage folders={galleryFolders} />,
                        },
                        {
                            key: "multiple-images",
                            title: "Multiple Images",
                            component: (
                                <MultipleImages folders={galleryFolders} />
                            ),
                        },
                        {
                            key: "upload-folder",
                            title: "Upload Folder",
                            component: (
                                <UploadFolder folders={galleryFolders} />
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default UploadImagesToGalleryPage;
