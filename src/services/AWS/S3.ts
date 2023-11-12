import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

import { env } from "@/src/env.mjs";
import type { GetObjectCommandInput } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

class S3 {
  private static instance: S3 | undefined;
  private client: S3Client;
  private static readonly DEFAULT_EXPIRE_TIME = 60 * 60;

  private constructor() {
    this.client = new S3Client({
      region: env.AWS_S3_REGION_NAME,
      credentials: {
        accessKeyId: env.AWS_USER_ACCESS_KEY,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  static getInstance = (): S3 => {
    if (S3.instance) return S3.instance;
    S3.instance = new S3();
    return S3.instance;
  };

  getObjectPresignedUrl = async (
    inputs: Omit<GetObjectCommandInput, "Bucket">,
    expiresIn?: number,
  ): Promise<string> => {
    const getObjCmd = new GetObjectCommand({
      Bucket: env.AWS_S3_BUCKET_NAME,
      ...inputs,
    });

    return await getSignedUrl(this.client, getObjCmd, {
      expiresIn: expiresIn ?? S3.DEFAULT_EXPIRE_TIME,
    });
  };
}

export default S3;
