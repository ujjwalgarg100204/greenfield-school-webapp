import { type StandardSection } from "@prisma/client";
import { type StandardSectionRepository } from "../model/repository/standard-section.repository";
import { handleServiceLevelError } from "../errors";
import { StandardSectionValidator } from "../model/validator/standard-section.validator";

export interface StandardSectionService {
    createNewSection(
        section: Pick<
            StandardSection,
            "label" | "teacherId" | "standardId" | "academicYearId"
        >,
    ): Promise<void>;
    getAllByStdIdAndAcademicYrId(
        standardId: string,
        academicYearId: string,
    ): Promise<StandardSection[]>;
    updateById(
        id: string,
        data: Partial<Pick<StandardSection, "label" | "teacherId">>,
    ): Promise<StandardSection>;
    deleteById(id: string): Promise<void>;
}

export class StandardSectionServiceImpl implements StandardSectionService {
    constructor(private readonly repo: StandardSectionRepository) {}

    async createNewSection(
        section: Pick<
            StandardSection,
            "label" | "teacherId" | "standardId" | "academicYearId"
        >,
    ): Promise<void> {
        try {
            await StandardSectionValidator.createNewSectionSchema().parseAsync(
                section,
            );
            await this.repo.createSection(section);
        } catch (err) {
            throw handleServiceLevelError(err, "Could not create new section", {
                section,
            });
        }
    }

    async getAllByStdIdAndAcademicYrId(
        standardId: string,
        academicYearId: string,
    ): Promise<StandardSection[]> {
        try {
            await StandardSectionValidator.allByStdIdAndAcademicYrIdSchema().parseAsync(
                { standardId, academicYearId },
            );
            return await this.repo.findAllByStdIdAndAcademicYrId(
                standardId,
                academicYearId,
            );
        } catch (err) {
            throw handleServiceLevelError(
                err,
                "Could not find standard section",
                { standardId, academicYearId },
            );
        }
    }

    async updateById(
        id: string,
        data: Partial<Pick<StandardSection, "label" | "teacherId">>,
    ): Promise<StandardSection> {
        try {
            await StandardSectionValidator.updateByIdSchema().parseAsync({
                id,
                ...data,
            });
            return await this.repo.updateById(id, data);
        } catch (err) {
            throw handleServiceLevelError(err, "Could not update section", {
                id,
                data,
            });
        }
    }

    async deleteById(id: string): Promise<void> {
        try {
            await StandardSectionValidator.deleteByIdSchema().parseAsync({
                id,
            });
            await this.repo.deleteById(id);
        } catch (err) {
            throw handleServiceLevelError(err, "Could not delete section", {
                id,
            });
        }
    }
}
