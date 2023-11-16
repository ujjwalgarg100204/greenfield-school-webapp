"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

import { api } from "@/src/trpc/react";
import { toSentenceCase } from "@/src/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import type { GalleryFolder } from "@prisma/client";
import { type FC } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { array, z } from "zod";
import { uploadFileToS3 } from "../../utils";

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];
const MB_BYTES = 1024 * 1024;
const UPLOAD_MAX_IMG_SIZE = MB_BYTES * 5; // 5MB

const UploadMultipleImagesSchema = z.object({
  folderName: z.string().min(1),
  images: z
    .custom<FileList>(data => data && data instanceof FileList)
    .superRefine((data, ctx) => {
      if (!data)
        return ctx.addIssue({
          code: "custom",
          message: "At least 1 file must be selected",
        });

      if (data.length === 0)
        return ctx.addIssue({
          code: "too_small",
          minimum: 1,
          inclusive: true,
          message: "At least 1 file must be provided, but none were provided",
          type: "array",
        });
      else if (data.length > 50)
        return ctx.addIssue({
          code: "too_big",
          maximum: 50,
          inclusive: true,
          message: `At most 50 files can be provided, but ${data.length} were provided`,
          type: "array",
        });

      const images = Array.from(data);

      const invalidTypeImages = images.filter(
        image => !ACCEPTED_FILE_TYPES.includes(image.type),
      );
      if (invalidTypeImages.length > 0) {
        return ctx.addIssue({
          code: "custom",
          message: `All files must be of type PNG or JPEG, other types were provided. ${invalidTypeImages
            .map(images => images.name)
            .join(",")} are invalid images.`,
        });
      }
      const invalidSizeImages = images.filter(
        image => image.size > UPLOAD_MAX_IMG_SIZE,
      );
      if (invalidSizeImages.length > 0) {
        return ctx.addIssue({
          code: "too_big",
          type: "array",
          message: `All files must be smaller than 5 MB. Files ${invalidSizeImages
            .map(image => image.name)
            .join(", ")} are too big`,
          maximum: UPLOAD_MAX_IMG_SIZE,
          inclusive: true,
        });
      }
    }),
});

type Props = {
  folders: Pick<GalleryFolder, "id" | "name">[];
};
const UploadFolder: FC<Props> = ({ folders }) => {
  const {
    register,
    formState: { errors },
    reset,
    control,
    handleSubmit,
  } = useForm<z.infer<typeof UploadMultipleImagesSchema>>({
    resolver: zodResolver(UploadMultipleImagesSchema),
    defaultValues: {
      folderName: folders[0]?.name,
    },
  });

  const createImagesPresignedPostMutation =
    api.gallery.createImagesPresignedPost.useMutation();
  const addImagesToFolderMutation = api.gallery.addImagesToFolder.useMutation();

  const handleFormSubmission = async ({
    folderName,
    images,
  }: z.infer<typeof UploadMultipleImagesSchema>) => {
    const imagesArr = Array.from(images).map(image => ({
      file: image,
      key: uuid(),
    }));

    const signedPosts = await createImagesPresignedPostMutation.mutateAsync({
      folderName,
      images: imagesArr.map(image => ({
        fileSize: image.file.size,
        fileType: image.file.type,
        key: image.key,
      })),
    });

    for (const signedPost of signedPosts) {
      await uploadFileToS3({
        signedImgUpload: signedPost.presignedPost,
        file: imagesArr.find(image => image.key === signedPost.key)!.file,
      });
    }

    await addImagesToFolderMutation.mutateAsync({
      folderName,
      transactionIds: signedPosts.map(signedPost => signedPost.transactionId),
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
              loading: "Uploading images...",
              success: "Upload successful",
              error: "Failed to upload images",
            }),
        )}
      >
        <Controller
          control={control}
          name="folderName"
          render={({ field: { onBlur, onChange, ref, value }, fieldState }) => (
            <Select
              label="Select a folder"
              ref={ref}
              onChange={onChange}
              selectedKeys={[value]}
              onBlur={onBlur}
              errorMessage={fieldState.error?.message}
              isRequired
            >
              {folders.map(folder => (
                <SelectItem
                  key={folder.name}
                  value={folder.name}
                  className="capitalize"
                >
                  {toSentenceCase(folder.name, "-")}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <input
          {...register("images")}
          placeholder="Select images to upload"
          type="file"
          accept="image/jpeg,image/png"
          multiple
          webkitdirectory=""
          directory=""
        />
        {errors.images && (
          <div className="text-red-500">{errors.images.message}</div>
        )}

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Upload Images
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadFolder;
