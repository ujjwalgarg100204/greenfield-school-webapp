import { type PrismaClient, type StandardSection } from "@prisma/client";
import { handleDBLevelError } from "~/server/errors";

export interface StandardSectionRepository {
    createSection(
        section: Pick<
            StandardSection,
            "label" | "teacherId" | "standardId" | "academicYearId"
        >,
    ): Promise<void>;
    findById(id: string): Promise<StandardSection | null>;
    findAllByStdIdAndAcademicYrId(
        standardId: string,
        academicYearId: string,
    ): Promise<StandardSection[]>;
    updateById(
        id: string,
        data: Partial<Pick<StandardSection, "label" | "teacherId">>,
    ): Promise<StandardSection>;
    deleteById(id: string): Promise<void>;
}

export class StandardSectionPrismaRepository
    implements StandardSectionRepository
{
    constructor(private readonly prisma: PrismaClient["standardSection"]) {}

    async createSection(
        section: Pick<
            StandardSection,
            "label" | "teacherId" | "standardId" | "academicYearId"
        >,
    ): Promise<void> {
        try {
            await this.prisma.create({ data: section });
        } catch (err) {
            throw handleDBLevelError(err, "Could not create standard section", {
                section,
            });
        }
    }

    async findById(id: string): Promise<StandardSection | null> {
        try {
            return this.prisma.findUnique({ where: { id } });
        } catch (err) {
            throw handleDBLevelError(err, "Could find standard section by id", {
                id,
            });
        }
    }

    async findAllByStdIdAndAcademicYrId(
        standardId: string,
        academicYearId: string,
    ): Promise<StandardSection[]> {
        try {
            return await this.prisma.findMany({
                where: {
                    standardId,
                    academicYearId,
                },
            });
        } catch (err) {
            throw handleDBLevelError(err, "Could not find standard sections", {
                standardId,
                academicYearId,
            });
        }
    }

    async updateById(
        id: string,
        data: Partial<Pick<StandardSection, "label" | "teacherId">>,
    ): Promise<StandardSection> {
        try {
            return await this.prisma.update({
                where: { id },
                data: {
                    label: data.label,
                    teacherId: data.teacherId,
                },
            });
        } catch (err) {
            throw handleDBLevelError(err, "Could not update standard section", {
                id,
                data,
            });
        }
    }

    async deleteById(id: string): Promise<void> {
        try {
            await this.prisma.delete({ where: { id } });
        } catch (err) {
            throw handleDBLevelError(err, "Could not delete standard section", {
                id,
            });
        }
    }
}
