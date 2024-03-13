import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import { db } from "~/server/db";
import { handleControllerLevelError } from "~/server/errors";
import { TeacherPrismaRepository } from "~/server/model/repository/teacher.repository";
import { TeacherValidator } from "~/server/model/validator/teacher.validator";
import {
    type TeacherService,
    TeacherServiceImpl,
} from "~/server/service/teacher.service";

const teacherRepo = new TeacherPrismaRepository(db.teacher);
const teacherSvc: TeacherService = new TeacherServiceImpl(teacherRepo);

export const teacherController = createTRPCRouter({
    getAll: publicProcedure
        .input(TeacherValidator.getAllTeacherSchema())
        .query(async ({ input: { academicYearId } }) => {
            try {
                return await teacherSvc.getAllByAcademicYrId(academicYearId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not fetch all teachers by academic yr id",
                );
            }
        }),
    newTeacher: publicProcedure
        .input(TeacherValidator.getNewTeacherSchema())
        .mutation(async ({ input: { academicYearId, ...teacher } }) => {
            try {
                await teacherSvc.createNewTeacher(teacher, academicYearId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not create new teacher",
                );
            }
        }),
    updateTeacher: publicProcedure
        .input(TeacherValidator.getUpdateTeacherSchema())
        .mutation(async ({ input: { id, academicYearId, ...data } }) => {
            try {
                return await teacherSvc.updateByIdAndAcademicYrId(
                    id,
                    academicYearId,
                    data,
                );
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not update teacher",
                );
            }
        }),
    deleteTeacher: publicProcedure
        .input(TeacherValidator.getDeleteTeacherSchema())
        .mutation(async ({ input: { id, academicYearId } }) => {
            try {
                await teacherSvc.deleteByIdAndAcademicYrId(id, academicYearId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not delete teacher",
                );
            }
        }),
});
