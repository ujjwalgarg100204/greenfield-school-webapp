export const uploadFileToS3 = async ({
  signedImgUpload,
  file,
}: {
  signedImgUpload: { url: string; fields: Record<string, string> };
  file: File;
}) => {
  const { url, fields } = signedImgUpload;
  const data: Record<string, string | Blob> = {
    ...fields,
    "Content-Type": file.type,
    file,
  };

  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  await fetch(url, {
    method: "POST",
    body: formData,
  });
};
