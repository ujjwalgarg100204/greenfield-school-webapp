import { type AcademicYear, type PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ValidationError } from "zod-validation-error";
import { handleDBLevelError } from "~/server/errors";

export interface AcademicYearRepository {
    findById(id: string): Promise<AcademicYear | null>;
    findAll(): Promise<AcademicYear[]>;
    create(startDate: Date, endDate: Date): Promise<void>;
    updateById(
        id: string,
        academicYr: Partial<Pick<AcademicYear, "startDate" | "endDate">>,
    ): Promise<AcademicYear>;
    deleteById(id: string): Promise<void>;
    findAcademicYrsCount(): Promise<number>;
}

export class AcademicYearPrismaRepository implements AcademicYearRepository {
    constructor(
        private readonly prismaAcademicYear: PrismaClient["academicYear"],
    ) {}

    async findById(id: string): Promise<AcademicYear | null> {
        try {
            return await this.prismaAcademicYear.findUnique({ where: { id } });
        } catch (err) {
            throw handleDBLevelError(err, "Could not get academic year by id", {
                id,
            });
        }
    }

    async findAll(): Promise<AcademicYear[]> {
        try {
            return await this.prismaAcademicYear.findMany();
        } catch (err) {
            const error = handleDBLevelError(
                err,
                "Could not get fetch academic year from database",
            );
            throw error;
        }
    }

    async create(startDate: Date, endDate: Date): Promise<void> {
        try {
            await this.prismaAcademicYear.create({
                data: { startDate, endDate },
            });
        } catch (err) {
            // handle explicit errors first
            if (err instanceof PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    throw new ValidationError(
                        "Academic year with provided start date and end date already exists",
                    );
                }
            }

            // handle unknown error here and rethrow error
            throw handleDBLevelError(
                err,
                "Could not create new academic year",
                { startDate, endDate },
            );
        }
    }

    async updateById(
        id: string,
        data: Partial<Pick<AcademicYear, "startDate" | "endDate">>,
    ): Promise<AcademicYear> {
        try {
            return await this.prismaAcademicYear.update({
                where: { id },
                data,
            });
        } catch (err) {
            // handle explicit errors first
            if (err instanceof PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    throw new ValidationError(
                        "Academic year with provided start date and end date already exists",
                    );
                }
            }
            throw handleDBLevelError(err, "Could not update academic year", {
                id,
                data,
            });
        }
    }

    async deleteById(id: string): Promise<void> {
        try {
            await this.prismaAcademicYear.delete({ where: { id } });
        } catch (err) {
            // FIXME: Should handle an error code explicitly which says, that other values
            // depend on this record, ie, since other tables reference this record
            // it could not be deleted
            throw handleDBLevelError(err, "Could not delete academic year", {
                id,
            });
        }
    }

    async findAcademicYrsCount(): Promise<number> {
        try {
            const countAcademicYrs = await this.prismaAcademicYear.aggregate({
                _count: true,
            });
            return countAcademicYrs._count;
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not find All Academic Year Count",
            );
        }
    }
}
