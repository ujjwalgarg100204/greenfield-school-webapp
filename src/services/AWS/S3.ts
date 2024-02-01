import type {
    DeleteObjectsCommandInput,
    GetObjectCommandInput,
} from "@aws-sdk/client-s3";
import {
    DeleteObjectsCommand,
    GetObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import {
    createPresignedPost,
    type PresignedPostOptions,
} from "@aws-sdk/s3-presigned-post";

import { env } from "@/src/env.mjs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

class S3 {
    private static instance: S3 | undefined;
    private client: S3Client;
    static readonly SIGNED_URL_DEFAULT_EXPIRE_TIME = 60 * 60;

    private constructor() {
        this.client = new S3Client({
            region: env.AWS_S3_REGION_NAME,
            credentials: {
                accessKeyId: env.AWS_USER_ACCESS_KEY,
                secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }

    /**
     * Returns a singleton instance of the S3 class.
     * @returns {S3} The singleton instance of the S3 class.
     */
    static getInstance = (): S3 => {
        if (S3.instance) return S3.instance;
        S3.instance = new S3();
        return S3.instance;
    };

    /**
     * Creates a pre-signed URL for retrieving an object from an S3 bucket.
     * @param inputs - The parameters for the GetObjectCommand.
     * @param expiresIn - The expiration time for the pre-signed URL, in seconds.
     * @returns A pre-signed URL for retrieving the specified object.
     */
    createGetObjectPresignedUrl = async (
        inputs: Omit<GetObjectCommandInput, "Bucket">,
        expiresIn?: number,
    ): Promise<string> => {
        const getObjCmd = new GetObjectCommand({
            Bucket: env.AWS_S3_BUCKET_NAME,
            ...inputs,
        });

        return await getSignedUrl(this.client, getObjCmd, {
            expiresIn: expiresIn ?? S3.SIGNED_URL_DEFAULT_EXPIRE_TIME,
        });
    };

    /**
     * Creates a presigned URL for uploading an object to Amazon S3 using a POST request.
     * @param options - The options for generating the presigned URL.
     * @returns A promise that resolves to the presigned URL and form fields required for the upload.
     */
    createPresignedObjPost = async (
        options: Omit<PresignedPostOptions, "Bucket">,
    ) => {
        return await createPresignedPost(this.client, {
            Bucket: env.AWS_S3_BUCKET_NAME,
            ...options,
        });
    };

    /**
     * Deletes multiple objects from an S3 bucket.
     * @param options - The options for the delete operation, excluding the bucket name.
     * @returns A promise that resolves with the result of the delete operation.
     */
    bulkDeleteObjects = async (
        options: Omit<DeleteObjectsCommandInput, "Bucket">,
    ) => {
        const deleteCmd = new DeleteObjectsCommand({
            Bucket: env.AWS_S3_BUCKET_NAME,
            ...options,
        });

        return await this.client.send(deleteCmd);
    };
}

export default S3;
