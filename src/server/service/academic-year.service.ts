import { type AcademicYear } from "@prisma/client";
import { type AcademicYearRepository } from "../model/repository/academic-year.repository";
import { AcademicYearValidator } from "../model/validator/academic-year.validator";
import { BaseError, handleServiceLevelError } from "../errors";
import { ValidationError } from "zod-validation-error";

export class AcademicYearService {
    constructor(private readonly academicYearRepo: AcademicYearRepository) {}

    async createNewAcademicYear(
        academicYear: Pick<AcademicYear, "startDate" | "endDate">,
    ): Promise<void> {
        try {
            const { startDate, endDate } =
                await AcademicYearValidator.getBaseSchema().parseAsync(
                    academicYear,
                );

            // prevent user from creating an academic year existing
            // which resembles already existing academic year
            // Ex: DB: [April 2021- March 2022, April 2022- March 2023],
            // should create error for creating (May 2021 - June 2022)
            const academicYears = await this.academicYearRepo.findAll();
            for (const academicYr of academicYears) {
                if (
                    academicYr.startDate.getFullYear() ===
                        startDate.getFullYear() &&
                    academicYr.endDate.getFullYear() === endDate.getFullYear()
                ) {
                    throw new ValidationError(
                        `An academic year with the same start and end year 
                        already exists. Either delete the academic year 
                        (${academicYr.startDate.getFullYear()}-${academicYr.endDate.getFullYear()}) 
                        or adjust your input`,
                    );
                }
            }
            await this.academicYearRepo.create(startDate, endDate);
        } catch (err) {
            throw handleServiceLevelError(
                err,
                "Could not create new academic year",
                { academicYear },
            );
        }
    }

    async getAll() {
        try {
            return await this.academicYearRepo.findAll();
        } catch (err) {
            throw handleServiceLevelError(err, "Could not fetch academic year");
        }
    }

    async updateOne(
        id: string,
        data: Partial<Pick<AcademicYear, "startDate" | "endDate">>,
    ) {
        try {
            const { startDate, endDate } =
                await AcademicYearValidator.getBaseSchema().parseAsync(data);

            // check if academic year with provided id exists in db
            const academicYr = await this.academicYearRepo.findById(id);
            if (!academicYr) {
                throw new BaseError(
                    "No academic year with provided id exists",
                    { context: { id } },
                );
            }

            // make sure user is only trying to update day and month of the record only
            if (
                data.startDate &&
                data.startDate.getFullYear() !==
                    academicYr.startDate.getFullYear()
            ) {
                throw new ValidationError(
                    "Changing of academic year in Start Date is not allowed, once created",
                );
            }
            if (
                data.endDate &&
                academicYr.endDate.getFullYear() !== data.endDate.getFullYear()
            ) {
                throw new ValidationError(
                    "Changing of academic year in End Date is not allowed, once created",
                );
            }

            return await this.academicYearRepo.updateById(id, {
                startDate,
                endDate,
            });
        } catch (err) {
            throw handleServiceLevelError(
                err,
                "Could not update academic year",
                { id, data },
            );
        }
    }

    async deleteById(id: string): Promise<void> {
        try {
            // User should not be able to delete an academic year if there is only 1
            // academic year left in database, because UI is made assuming there is
            // atleast 1 year in database
            const academicYrsCount =
                await this.academicYearRepo.findAcademicYrsCount();
            if (academicYrsCount === 1) {
                throw new BaseError(
                    "Can't delete the only left Academic Year",
                    { context: { id, academicYrsCount } },
                );
            }

            await this.academicYearRepo.deleteById(id);
        } catch (err) {
            if (err instanceof BaseError) {
                switch (err.message) {
                    case "Can't delete the only left Academic Year":
                        throw err;
                }
            }
            throw handleServiceLevelError(
                err,
                "Could not delete academic year",
                { id },
            );
        }
    }
}
