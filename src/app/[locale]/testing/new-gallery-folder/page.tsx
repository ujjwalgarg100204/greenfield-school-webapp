"use client";

import type { FC } from "react";
import SinglePageTabs from "../../(main-public)/_components/SinglePageTabs";
import WithThumbnail from "./_components/WithThumbnail";
import WithoutThumbnail from "./_components/WithoutThumbnail";

const TestingNewGalleryFolderPage: FC = () => {
    return (
        <main className="flex min-h-full flex-1 flex-col justify-center gap-4 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create new Folder
                </h2>
            </div>
            <div className="mx-auto">
                <SinglePageTabs
                    tabs={[
                        {
                            key: "without-thumbnail",
                            title: "Without Thumbnail",
                            component: <WithoutThumbnail />,
                        },
                        {
                            key: "with-thumbnail",
                            title: "With Thumbnail",
                            component: <WithThumbnail />,
                        },
                    ]}
                />
            </div>
        </main>
    );
};

export default TestingNewGalleryFolderPage;
