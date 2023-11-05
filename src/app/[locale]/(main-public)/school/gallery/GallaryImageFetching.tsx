import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

import Image from "next/image";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const GallaryImageFetching = async () => {
  const createPresignedUrlWithClient = ({
    region,

    accessKeyId,
    secretAccessKey,
    bucket,
    key,
  }: {
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    bucket: string;
    key: string;
  }) => {
    const client = new S3Client({
      region,
      credentials: { accessKeyId, secretAccessKey },
    });
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command);
  };

  const REGION = "us-west-2";
  const CREDENTIALS = {
    ACCESSKEYID: "AKIASA3HWGLO3BUFHDGU",
    SECRETACCESSKEY: "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",
  };
  const BUCKET = "greenfield-internationls";
  const KEY = "Aerial-view-of-seashore.jpg";


    const clientUrl = await createPresignedUrlWithClient({
      region: REGION,
      accessKeyId: CREDENTIALS.ACCESSKEYID,
      secretAccessKey: CREDENTIALS.SECRETACCESSKEY,
      bucket: BUCKET,
      key: KEY,
    });

    console.log("Presigned URL with client", clientUrl);

  


  return (
    <div>
      <Image src={clientUrl} height={100} width={100} alt="image" />
    </div>
  );
};

export default GallaryImageFetching;
