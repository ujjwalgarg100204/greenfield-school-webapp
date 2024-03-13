import { StandardPrismaRepository } from "~/server/model/repository/standard.repository";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "~/server/db";
import {
    type StandardService,
    StandardServiceImpl,
} from "~/server/service/standard.service";
import { StandardValidator } from "~/server/model/validator/standard.validator";
import { handleControllerLevelError } from "~/server/errors";

const standardRepo = new StandardPrismaRepository(db.standard);
const standardSvc: StandardService = new StandardServiceImpl(standardRepo);

export const standardRouter = createTRPCRouter({
    getAll: publicProcedure
        .input(StandardValidator.getAllStandardsSchema())
        .query(async ({ input: { academicYearId } }) => {
            try {
                return await standardSvc.getAllByAcademicYrId(academicYearId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not fetch all standards by academic yr id",
                );
            }
        }),
    newStandard: publicProcedure
        .input(StandardValidator.getNewStandardSchema())
        .mutation(async ({ input: { academicYearId, label } }) => {
            try {
                await standardSvc.createNewStandard(label, academicYearId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not create new standard",
                );
            }
        }),
    updateStandard: publicProcedure
        .input(StandardValidator.getUpdateStandardSchema())
        .mutation(async ({ input: { id, academicYearId, label } }) => {
            try {
                return await standardSvc.updateByIdAndAcademicYrId(
                    id,
                    academicYearId,
                    label,
                );
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not update standard",
                );
            }
        }),
    deleteStandard: publicProcedure
        .input(StandardValidator.getDeleteStandardSchema())
        .mutation(async ({ input: { id, academicYearId } }) => {
            try {
                await standardSvc.deleteByIdAndAcademicYrId(id, academicYearId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not delete standard",
                );
            }
        }),
});
