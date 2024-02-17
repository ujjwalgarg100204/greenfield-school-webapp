import type { FC } from "react";
import { Input } from "@/src/app/_lib/next-ui";
import { api } from "@/src/trpc/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewFolderWithoutThumbnailSchema = z.object({
    folderName: z.string().min(1),
});

const WithoutThumbnail: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof NewFolderWithoutThumbnailSchema>>({
        resolver: zodResolver(NewFolderWithoutThumbnailSchema),
    });
    const createFolderMutation = api.gallery.createGalleryFolder.useMutation();

    const handleFormSubmission = async (
        data: z.infer<typeof NewFolderWithoutThumbnailSchema>,
    ) => {
        await createFolderMutation.mutateAsync({ folderName: data.folderName });
        reset();
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                className="space-y-6"
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

export default WithoutThumbnail;
