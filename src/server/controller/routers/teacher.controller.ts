import { z } from "zod";
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

export const teacherRouter = createTRPCRouter({
    getAll: publicProcedure
        .input(
            z
                .string({
                    required_error: "Academic Year Id is required",
                    invalid_type_error:
                        "Academic Year Id is supposed be a string value",
                })
                .cuid("Invalid academic year id provided"),
        )
        .query(async ({ input: academicYrId }) => {
            try {
                return await teacherSvc.getAllByAcademicYrId(academicYrId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not fetch all teachers by academic yr id",
                );
            }
        }),
    newTeacher: publicProcedure
        .input(
            TeacherValidator.getNewTeacherSchema().extend({
                academicYrId: z
                    .string({
                        required_error:
                            "Academic Year Id is required to create a new teacher",
                        invalid_type_error: "Academic Year Id must be a string",
                    })
                    .cuid("Invalid Academic Year Id"),
            }),
        )
        .mutation(async ({ input: { academicYrId, ...teacher } }) => {
            try {
                await teacherSvc.createNewTeacher(teacher, academicYrId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not create new teacher",
                );
            }
        }),
    updateTeacher: publicProcedure
        .input(
            TeacherValidator.getUpdateTeacherSchema().extend({
                id: z
                    .string({
                        required_error:
                            "Teacher Id is required to update teacher",
                        invalid_type_error: "Teacher Id must be a string",
                    })
                    .cuid("Invalid Teacher Id"),
                academicYrId: z
                    .string({
                        required_error:
                            "Academic Year Id is required to update teacher",
                        invalid_type_error: "Academic Year Id must be a string",
                    })
                    .cuid("Invalid Academic Year Id"),
            }),
        )
        .mutation(async ({ input: { id, academicYrId, ...data } }) => {
            try {
                return await teacherSvc.updateByIdAndAcademicYrId(
                    id,
                    academicYrId,
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
        .input(
            z.object({
                id: z
                    .string({
                        required_error:
                            "Teacher Id is required to update teacher",
                        invalid_type_error: "Teacher Id must be a string",
                    })
                    .cuid("Invalid Teacher Id"),
                academicYrId: z
                    .string({
                        required_error:
                            "Academic Year Id is required to update teacher",
                        invalid_type_error: "Academic Year Id must be a string",
                    })
                    .cuid("Invalid Academic Year Id"),
            }),
        )
        .mutation(async ({ input: { id, academicYrId } }) => {
            try {
                await teacherSvc.deleteByIdAndAcademicYrId(id, academicYrId);
            } catch (err) {
                throw handleControllerLevelError(
                    err,
                    "Could not delete teacher",
                );
            }
        }),
});
