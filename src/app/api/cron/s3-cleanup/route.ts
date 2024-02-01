import { NextResponse, type NextRequest } from "next/server";

import { env } from "@/src/env.mjs";
import { db } from "@/src/server/db";
import S3 from "@/src/services/AWS/S3";

// cleans up all the failed transactions to s3
export const GET = async (req: NextRequest) => {
    const authorizationHeader = req.headers.get("Authorization");
    if (authorizationHeader !== `Bearer ${env.CRON_SECRET}`) {
        return NextResponse.json({ status: "unauthorized" }, { status: 401 });
    }

    const failedTransactions = await db.s3UploadTransaction.findMany({});
    const s3 = S3.getInstance();

    for (let i = 0; i < failedTransactions.length; i += 1000) {
        const transactions = failedTransactions.slice(i, i + 1000);
        const delRes = await s3.bulkDeleteObjects({
            Delete: {
                Objects: transactions.map(({ s3Path }) => ({
                    Key: s3Path,
                })),
                Quiet: false,
            },
        });

        // delete the transactions which were successfully deleted from s3
        if (delRes.Deleted)
            await db.s3UploadTransaction.deleteMany({
                where: {
                    s3Path: {
                        in: delRes.Deleted.map(({ Key }) => Key ?? ""),
                    },
                },
            });

        // mark the transactions which failed to delete from s3
        if (delRes.Errors)
            // batch all update queries into a single transaction
            await db.$transaction(
                delRes.Errors.map(({ Code, Key, Message }) => {
                    return db.s3UploadTransaction.update({
                        where: { s3Path: Key },
                        data: { errorCode: Code, errorMessage: Message },
                    });
                }),
            );
    }

    return NextResponse.json({ success: true }, { status: 200 });
};
