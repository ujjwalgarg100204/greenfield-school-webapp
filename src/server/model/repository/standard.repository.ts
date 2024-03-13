import { type PrismaClient, type Standard } from "@prisma/client";
import { handleDBLevelError } from "~/server/errors";

export interface StandardRepository {
    create(label: string, academicYearId: string): Promise<void>;
    findAllByAcademicYrId(academicYearId: string): Promise<Standard[]>;
    findByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
    ): Promise<Standard | null>;
    updateByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
        label: string,
    ): Promise<Standard>;
    deleteByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
    ): Promise<void>;
}

export class StandardPrismaRepository implements StandardRepository {
    constructor(private readonly prismaStandard: PrismaClient["standard"]) {}

    async create(label: string, academicYearId: string): Promise<void> {
        try {
            await this.prismaStandard.create({
                data: { label, academicYearId },
            });
        } catch (err) {
            throw handleDBLevelError(err, "Could not create standard", {
                label,
                academicYearId,
            });
        }
    }

    async findAllByAcademicYrId(academicYearId: string): Promise<Standard[]> {
        try {
            return await this.prismaStandard.findMany({
                where: { academicYearId },
            });
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not find standard by academic year id",
                { academicYearId },
            );
        }
    }

    async findByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
    ): Promise<Standard | null> {
        try {
            return await this.prismaStandard.findUnique({
                where: { id, academicYearId },
            });
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not find standard by id and academic year id",
                { id, academicYearId },
            );
        }
    }

    async updateByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
        label: string,
    ): Promise<Standard> {
        try {
            return await this.prismaStandard.update({
                where: { id, academicYearId },
                data: { label },
            });
        } catch (err) {
            throw handleDBLevelError(err, "Could not update standard", {
                id,
                academicYearId,
                label,
            });
        }
    }

    async deleteByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
    ): Promise<void> {
        try {
            await this.prismaStandard.delete({
                where: { id, academicYearId },
            });
        } catch (err) {
            throw handleDBLevelError(err, "Could not delete standard", {
                id,
                academicYearId,
            });
        }
    }
}
