import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client
} from "@aws-sdk/client-s3";

import { env } from "@/src/env.mjs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class Galleryawsintegration {
  private client: S3Client;
  private command: ListObjectsV2Command;
  constructor() {
    this. client = new S3Client({
      region: env.AWS_S3_REGION_KEY,
      credentials: {
        accessKeyId: env.AWS_S3_ACCESSKEY_ID,
        secretAccessKey: env.AWS_S3_SECRET_ACCESS_KEY,
      },
    });

    this.command = new ListObjectsV2Command({
      Bucket: env.AWS_S3_BUCKET,
    });
  }

  async GetObjectUrl(key: string) {
    const command = new GetObjectCommand({
      Bucket: env.AWS_S3_BUCKET,
      Key: key,
    });
    const url = getSignedUrl(this.client, command);
    return url;
  }

  async ListObjects() {
    const result = await this.client.send(this.command);
    return result;
  }
}