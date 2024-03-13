import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import { db } from "~/server/db";
import { handleControllerLevelError } from "~/server/errors";
import { AcademicYearPrismaRepository } from "~/server/model/repository/academic-year.repository";
import { AcademicYearValidator } from "~/server/model/validator/academic-year.validator";
import { AcademicYearServiceImpl } from "~/server/service/academic-year.service";

const academicYrRepo = new AcademicYearPrismaRepository(db.academicYear);
const academicYrSvc = new AcademicYearServiceImpl(academicYrRepo);

export const academicYearController = createTRPCRouter({
    getAll: publicProcedure.query(async () => {
        try {
            return await academicYrSvc.getAll();
        } catch (err) {
            throw handleControllerLevelError(
                err,
                "Could not fetch academic years",
            );
        }
    }),
    newAcademicYear: publicProcedure
        .input(AcademicYearValidator.getBaseSchema())
        .mutation(async ({ input }) => {
            try {
                await academicYrSvc.createNewAcademicYear(input);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not create new academic year",
                );
            }
        }),
    updateAcademicYear: publicProcedure
        .input(AcademicYearValidator.getBaseSchema())
        .mutation(async ({ input: { id, ...data } }) => {
            try {
                // verify id received
                const parsedId = await z
                    .string({
                        required_error: "Academic Year's id is required",
                    })
                    .cuid("Invalid id provided")
                    .parseAsync(id);

                await academicYrSvc.updateOne(parsedId, {
                    startDate: data.startDate,
                    endDate: data.endDate,
                });
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not update academic year",
                );
            }
        }),
    deleteOne: publicProcedure
        .input(z.string().cuid())
        .mutation(async ({ input: id }) => {
            try {
                await academicYrSvc.deleteById(id);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not delete academic year",
                );
            }
        }),
});
