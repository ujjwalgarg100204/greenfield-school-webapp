import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

import { Image } from "@lib/next-ui";
import NextImage from "next/image";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const GallaryImageFetching = async () => {
  const client = new S3Client({
    region: "us-west-2",
    credentials: {
      accessKeyId: "AKIASA3HWGLO3BUFHDGU",
      secretAccessKey: "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",
    },
    
  });
  

  const GetObjectUrl = async (key: string) => {
    const command = new GetObjectCommand({
      Bucket: "greenfield-internationls",
      Key: key,
    });
    const url = getSignedUrl(client, command);
    return url;
  };

  const command = new ListObjectsV2Command({
    Bucket: "greenfield-internationls",
  });
  const result = await client.send(command);
  console.log("Result of our listObject", result);

  return (
    <div className="grid-cols grid gap-3 rounded-2xl shadow-xl">
      {result.Contents?.map(
        async images =>
          images.Size != undefined &&
          images.Size > 0 && (
            <Image
              key={images.ETag}
              isBlurred
              src={await GetObjectUrl(`${images.Key}`)}
              alt="image"
              // className="object-cover object-center md:w-[60rem]"
              height={200}
              width={200}
              quality={30}
              priority
              as={NextImage}
            />
          ),
      )}
    </div>
  );
};

export default GallaryImageFetching;
