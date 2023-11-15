"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import type { GalleryFolder } from "@prisma/client";
import type { FC } from "react";
import { z } from "zod";

type Props = {
  folders: Pick<GalleryFolder, "id" | "name">[];
};

const MB_BYTES = 1000000; // Number of bytes in a megabyte.

// This is the list of mime types you will accept with the schema
const ACCEPTED_MIME_TYPES = ["image/gif", "image/jpeg", "image/png"];

// This is a file validation with a few extra checks in the `superRefine`.
// The `refine` method could also be used, but `superRefine` offers better
// control over when the errors are added and can include specific information
// about the value being parsed.
const imageSchema = z.instanceof(File).superRefine((f, ctx) => {
  // First, add an issue if the mime type is wrong.
  if (!ACCEPTED_MIME_TYPES.includes(f.type)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `File must be one of [${ACCEPTED_MIME_TYPES.join(
        ", ",
      )}] but was ${f.type}`,
    });
  }
  // Next add an issue if the file size is too large.
  if (f.size > 3 * MB_BYTES) {
    ctx.addIssue({
      code: z.ZodIssueCode.too_big,
      type: "array",
      message: `The file must not be larger than ${3 * MB_BYTES} bytes: ${
        f.size
      }`,
      maximum: 3 * MB_BYTES,
      inclusive: true,
    });
  }
});

const BatchUploadFormSchema = z.object({
  folder: z.string().min(1),
  file: z
    .custom<FileList>(data => {
      console.log(data);
    })
    .refine(
      list => list.length === 1,
      "Only one file can be uploaded at a time",
    ),
});

const BatchUploadImagesForm: FC<Props> = ({ folders }) => {
  const {
    control,
    handleSubmit,
    setValue,
    register,
    trigger,
    formState: { errors },
  } = useForm<z.infer<typeof BatchUploadFormSchema>>({
    defaultValues: { folder: folders[0]?.name, file: undefined },
  });

  const validFormSubmissionHandler: SubmitHandler<
    z.infer<typeof BatchUploadFormSchema>
  > = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(validFormSubmissionHandler)}
      className="space-y-6"
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
            {...register("file")}
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

export default BatchUploadImagesForm;
