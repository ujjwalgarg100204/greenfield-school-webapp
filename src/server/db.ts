import { env } from "@/env";
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () =>
    new PrismaClient({
        log:
            env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    db: PrismaClientSingleton | undefined;
};

export const db = globalForPrisma.db ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
