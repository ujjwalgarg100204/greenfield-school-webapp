"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

import { Input } from "@/src/lib/next-ui";
import { api } from "@/src/trpc/react";
import { toSentenceCase } from "@/src/utils";
import { type GalleryFolder } from "@prisma/client";
import type { FC } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { uploadFileToS3 } from "../../utils";

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];
const MB_BYTES = 1024 * 1024;
const UPLOAD_MAX_IMG_SIZE = MB_BYTES * 5; // 5MB

const UploadSingleImageSchema = z.object({
  folderName: z.string().min(1),
  image: z
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

type Props = {
  folders: Pick<GalleryFolder, "id" | "name">[];
};
const SingleImage: FC<Props> = ({ folders }) => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof UploadSingleImageSchema>>({
    defaultValues: {
      folderName: folders[0]?.name,
    },
  });
  const imgPresignedPostMutation =
    api.gallery.createImgPresignedPost.useMutation();
  const addImgToFolderMutation =
    api.gallery.addImageToGalleryFolder.useMutation();

  const handleFormSubmission = async ({
    folderName,
    image,
  }: z.infer<typeof UploadSingleImageSchema>) => {
    const { presignedPost, transactionId } =
      await imgPresignedPostMutation.mutateAsync({
        fileSize: image[0]!.size,
        fileType: image[0]!.type,
        folderName,
        newFolder: false,
      });

    await uploadFileToS3({
      signedImgUpload: presignedPost,
      file: image[0]!,
    });

    await addImgToFolderMutation.mutateAsync({
      folderName,
      imageTransactionId: transactionId,
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
              loading: "Uploading image...",
              success: "Upload successful",
              error: "Failed to upload image",
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
        <Input
          type="file"
          radius="sm"
          label="Images to upload"
          variant="bordered"
          labelPlacement="outside"
          isInvalid={!!errors.image}
          errorMessage={errors.image?.message}
          placeholder="Select images to upload"
          accept="image/jpeg,image/png"
          {...register("image")}
        />
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Upload Image
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleImage;
