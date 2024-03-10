import { type Teacher } from "@prisma/client";
import { type TeacherRepository } from "../model/repository/teacher.repository";
import { handleServiceLevelError } from "../errors";
import { TeacherValidator } from "../model/validator/teacher.validator";

export interface TeacherService {
    createNewTeacher(
        teacher: Pick<Teacher, "name" | "email" | "phone">,
        academicYrId: string,
    ): Promise<void>;
    getAllByAcademicYrId(academicYrId: string): Promise<Teacher[]>;
    updateByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
        data: Partial<Pick<Teacher, "name" | "email" | "phone">>,
    ): Promise<Teacher>;
    deleteByIdAndAcademicYrId(id: string, academicYrId: string): Promise<void>;
}

export class TeacherServiceImpl implements TeacherService {
    constructor(private readonly teacherRepo: TeacherRepository) {}

    async createNewTeacher(
        teacher: Pick<Teacher, "name" | "email" | "phone">,
        academicYrId: string,
    ): Promise<void> {
        try {
            await TeacherValidator.getBaseSchema().parseAsync(teacher);
            await this.teacherRepo.create(teacher, academicYrId);
        } catch (err) {
            throw handleServiceLevelError(err, "Could not create teacher", {
                teacher,
                academicYrId,
            });
        }
    }

    async getAllByAcademicYrId(academicYrId: string): Promise<Teacher[]> {
        try {
            return await this.teacherRepo.findAllByAcademicYrId(academicYrId);
        } catch (err) {
            throw handleServiceLevelError(
                err,
                "Could not fetch teachers by academic year id",
                { academicYrId },
            );
        }
    }

    async updateByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
        data: Partial<Pick<Teacher, "name" | "email" | "phone">>,
    ): Promise<Teacher> {
        try {
            await TeacherValidator.getUpdateTeacherSchema().parseAsync(data);
            return await this.teacherRepo.updateByIdAndAcademicYrId(
                id,
                academicYrId,
                data,
            );
        } catch (err) {
            throw handleServiceLevelError(err, "Could not update teacher", {
                id,
                academicYrId,
                data,
            });
        }
    }

    async deleteByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
    ): Promise<void> {
        try {
            await this.teacherRepo.deleteByIdAndAcademicYrId(id, academicYrId);
        } catch (err) {
            throw handleServiceLevelError(err, "Could not delete teacher", {
                id,
                academicYrId,
            });
        }
    }
}
