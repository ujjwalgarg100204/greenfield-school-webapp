import { ValidationError, fromZodError } from "zod-validation-error";
import { TRPCError } from "@trpc/server";
import {
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { logger } from "./logger";
import { ZodError } from "zod";

type Jsonable =
    | string
    | number
    | boolean
    | null
    | undefined
    | readonly Jsonable[]
    | { readonly [key: string]: Jsonable }
    | { toJSON(): Jsonable };

export class BaseError extends Error {
    public readonly context?: Jsonable;

    constructor(
        message: string,
        options: { cause?: Error; context?: Jsonable } = {},
    ) {
        const { cause, context } = options;

        super(message, { cause });
        this.name = this.constructor.name;

        this.context = context;
    }
}

export const ensureError = (err: unknown): Error => {
    if (err instanceof Error) return err;

    let stringified = "[unable to stringify the thrown value]";
    try {
        stringified = JSON.stringify(err);
    } catch {}

    return new Error(
        `The value was thrown as is, not through an Error: ${stringified}`,
    );
};

export const handleDBLevelError = (
    err: unknown,
    failedOperation?: string,
    context?: Jsonable,
): BaseError => {
    const error = ensureError(err);
    let errMessage = "Database failed unexpectedly";

    // Prisma Client throws a PrismaClientKnownRequestError exception if the
    // query engine returns a known error related to the request - for example,
    // a unique constraint violation
    if (error instanceof PrismaClientKnownRequestError) {
        errMessage = `Database failed: [${error.message}]`;
    }

    // Prisma Client throws a PrismaClientUnknownRequestError exception if the
    // query engine returns an error related to a request that does not have
    // an error code, thus we can't handle it properly
    if (error instanceof PrismaClientUnknownRequestError) {
        errMessage = "Database failed with absence of error code";
    }

    // Prisma Client throws a PrismaClientValidationError exception if
    // validation fails - for example: Missing field - for example, an empty
    // data: {} property when creating a new record
    if (error instanceof PrismaClientValidationError) {
        errMessage = "Database failed due to a Validation Error";
    }

    // crash the application if prisma crashes
    // RustPanicError is thrown when underlying rust engine of prisma crashes
    // IntializationError is thrown when client was initialized properly
    // Both error requires restart of the process
    if (
        error instanceof PrismaClientRustPanicError ||
        error instanceof PrismaClientInitializationError
    ) {
        logger.error(
            "Fatal error encountered by Prisma, have to restart the service",
            error,
        );
        process.exit(1);
    }

    return new BaseError(failedOperation ?? errMessage, {
        cause: error,
        context,
    });
};

export const handleServiceLevelError = (
    err: unknown,
    failedOperation?: string,
    context?: Jsonable,
) => {
    const error = ensureError(err);
    let errMsg = "Service failed unexpectedly";

    // let validation errors pass through as it is
    if (error instanceof ValidationError) return error;

    // if a BaseError is thrown then error is pre-handled
    if (error instanceof BaseError) {
        errMsg = `Service failed because ${error.message}`;
    }

    return new BaseError(failedOperation ?? errMsg, { cause: error, context });
};

export const handleControllerLevelError = (
    err: unknown,
    failedOperation?: string,
) => {
    const error = ensureError(err);

    // if error occured due to a validation error, then its client's fault
    if (error instanceof ZodError) {
        return new TRPCError({
            message: fromZodError(error).toString(),
            code: "BAD_REQUEST",
            cause: error,
        });
    }
    if (error instanceof ValidationError) {
        return new TRPCError({
            message: error.message,
            code: "BAD_REQUEST",
            cause: error,
        });
    }

    // if error occured due to base error then its server's fault
    if (error instanceof BaseError) {
        logger.error(failedOperation ?? "Controller encountered error", error);
        return new TRPCError({
            message: error.message,
            code: "INTERNAL_SERVER_ERROR",
            cause: error,
        });
    }

    // unknown error occured
    logger.error(
        failedOperation ?? "Controller encountered an unexpected error",
        error,
    );
    return new TRPCError({
        message: "Something went wrong! Please try again",
        code: "INTERNAL_SERVER_ERROR",
        cause: error,
    });
};
