import { StandardSectionValidator } from "~/server/model/validator/standard-section.validator";
import { createTRPCRouter, publicProcedure } from "../trpc";
import {
    StandardSectionPrismaRepository,
    type StandardSectionRepository,
} from "~/server/model/repository/standard-section.repository";
import { db } from "~/server/db";
import {
    type StandardSectionService,
    StandardSectionServiceImpl,
} from "~/server/service/standard-section.service";
import { handleControllerLevelError } from "~/server/errors";

const standardSectionRepo: StandardSectionRepository =
    new StandardSectionPrismaRepository(db.standardSection);
const standardSectionSvc: StandardSectionService =
    new StandardSectionServiceImpl(standardSectionRepo);

export const standardSectionController = createTRPCRouter({
    createNewSection: publicProcedure
        .input(StandardSectionValidator.createNewSectionSchema())
        .mutation(async ({ input }) => {
            try {
                await standardSectionSvc.createNewSection(input);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not create new section",
                );
            }
        }),
    getAllByStdIdAndAcademicYrId: publicProcedure
        .input(StandardSectionValidator.allByStdIdAndAcademicYrIdSchema())
        .query(async ({ input }) => {
            try {
                await standardSectionSvc.getAllByStdIdAndAcademicYrId(
                    input.standardId,
                    input.academicYearId,
                );
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not get all sections by standard id and academic year id",
                );
            }
        }),
    updateById: publicProcedure
        .input(StandardSectionValidator.updateByIdSchema())
        .mutation(async ({ input }) => {
            try {
                await standardSectionSvc.updateById(input.id, input);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not update section",
                );
            }
        }),
    deleteById: publicProcedure
        .input(StandardSectionValidator.deleteByIdSchema())
        .mutation(async ({ input }) => {
            try {
                await standardSectionSvc.deleteById(input.id);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not delete section",
                );
            }
        }),
});
