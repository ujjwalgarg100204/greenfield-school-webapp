"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectItem } from "@nextui-org/react";

import { api } from "@/src/trpc/react";
import { type GalleryFolder } from "@prisma/client";
import type { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import useFileInput from "../useFileInput";
import { uploadFileToS3 } from "../utils";

type Props = {
  folders: Pick<GalleryFolder, "id" | "name">[];
};

const UploadImageFormSchema = z.object({
  folder: z.string().min(1),
});

const UploadImageForm: FC<Props> = ({ folders }) => {
  const { control, reset, trigger, getValues } = useForm<
    z.infer<typeof UploadImageFormSchema>
  >({
    resolver: zodResolver(UploadImageFormSchema),
  });
  const { file, fileInput, handleFileChange, handleFileReset } = useFileInput();
  const createSignedImgUploadMutation =
    api.gallery.createSignedImgUpload.useMutation();
  const updateGalleryMutation = api.gallery.updateGallery.useMutation();

  const handleFormSubmission = async () => {
    const isValid = (await trigger()) && !!file;
    if (!isValid) return;

    const { signedImgUpload, transactionId } =
      await createSignedImgUploadMutation.mutateAsync({
        folderName: getValues("folder"),
      });

    await uploadFileToS3({
      signedImgUpload,
      file,
    });

    await updateGalleryMutation.mutateAsync({
      folderName: getValues("folder"),
      transactionId,
    });

    // reset inputs
    reset();
    handleFileReset();
  };

  return (
    <form
      className="space-y-6"
      onSubmit={async ev => {
        ev.preventDefault();
        await toast.promise(handleFormSubmission(), {
          loading: "Uploading image...",
          success: "Uploading image successfully",
          error: "Failed to upload image",
        });
      }}
    >
      <Controller
        control={control}
        name="folder"
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
                {folder.name.replace(/-/g, " ")}
              </SelectItem>
            ))}
          </Select>
        )}
      />

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Image to upload
        </label>
        <div className="mt-2">
          <input
            id="image"
            type="file"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            accept="image/*"
            ref={fileInput}
            onChange={handleFileChange}
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Upload Photos
        </button>
      </div>
    </form>
  );
};

export default UploadImageForm;
