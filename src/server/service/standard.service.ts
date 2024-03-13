import { type Standard } from "@prisma/client";
import { type StandardRepository } from "../model/repository/standard.repository";
import { StandardValidator } from "../model/validator/standard.validator";
import { handleServiceLevelError } from "../errors";

export interface StandardService {
    createNewStandard(label: string, academicYearId: string): Promise<void>;
    getAllByAcademicYrId(academicYearId: string): Promise<Standard[]>;
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

export class StandardServiceImpl implements StandardService {
    constructor(private readonly standardRepo: StandardRepository) {}

    async createNewStandard(
        label: string,
        academicYearId: string,
    ): Promise<void> {
        try {
            await StandardValidator.getNewStandardSchema().parseAsync({
                label,
                academicYearId,
            });
            await this.standardRepo.create(label, academicYearId);
        } catch (err) {
            throw handleServiceLevelError(err, "Could not create standard", {
                label,
                academicYearId,
            });
        }
    }

    async getAllByAcademicYrId(academicYearId: string): Promise<Standard[]> {
        try {
            await StandardValidator.getAllStandardsSchema().parseAsync({
                academicYearId,
            });
            return await this.standardRepo.findAllByAcademicYrId(
                academicYearId,
            );
        } catch (err) {
            throw handleServiceLevelError(
                err,
                "Could not fetch standard by academic year id",
                { academicYearId },
            );
        }
    }

    async updateByIdAndAcademicYrId(
        id: string,
        academicYearId: string,
        label: string,
    ): Promise<Standard> {
        try {
            await StandardValidator.getUpdateStandardSchema().parseAsync({
                id,
                academicYearId,
                label,
            });
            return this.standardRepo.updateByIdAndAcademicYrId(
                id,
                academicYearId,
                label,
            );
        } catch (err) {
            throw handleServiceLevelError(err, "Could not update standard", {
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
            await StandardValidator.getDeleteStandardSchema().parseAsync({
                id,
                academicYearId,
            });
            await this.standardRepo.deleteByIdAndAcademicYrId(
                id,
                academicYearId,
            );
        } catch (err) {
            throw handleServiceLevelError(err, "Could not delete standard", {
                id,
                academicYearId,
            });
        }
    }
}
