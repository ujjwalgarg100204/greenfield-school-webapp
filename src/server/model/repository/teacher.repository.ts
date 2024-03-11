import { type PrismaClient, type Teacher } from "@prisma/client";
import { handleDBLevelError } from "~/server/errors";

export interface TeacherRepository {
    create(
        teacher: Pick<Teacher, "name"> &
            Partial<Pick<Teacher, "email" | "phone">>,
        academicYrId: string,
    ): Promise<void>;
    findAllByAcademicYrId(academicYrId: string): Promise<Teacher[]>;
    findByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
    ): Promise<Teacher | null>;
    updateByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
        teacher: Partial<Pick<Teacher, "name" | "email" | "phone">>,
    ): Promise<Teacher>;
    deleteByIdAndAcademicYrId(id: string, academicYrId: string): Promise<void>;
}

export class TeacherPrismaRepository implements TeacherRepository {
    constructor(private readonly prismaTeacher: PrismaClient["teacher"]) {}

    async create(
        teacher: Pick<Teacher, "name"> &
            Partial<Pick<Teacher, "email" | "phone">>,
        academicYrId: string,
    ): Promise<void> {
        try {
            await this.prismaTeacher.create({
                data: {
                    name: teacher.name,
                    email: teacher.email,
                    phone: teacher.phone,
                    academicYearId: academicYrId,
                },
            });
        } catch (err) {
            throw handleDBLevelError(err, "Could not create teacher", {
                teacher,
                academicYrId,
            });
        }
    }

    async findAllByAcademicYrId(academicYrId: string): Promise<Teacher[]> {
        try {
            return this.prismaTeacher.findMany({
                where: { academicYearId: academicYrId },
            });
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not find teacher by acdemic year id",
                { academicYrId },
            );
        }
    }

    async findByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
    ): Promise<Teacher | null> {
        try {
            return this.prismaTeacher.findUnique({
                where: { academicYearId: academicYrId, id },
            });
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not find teacher by id and academic year id",
                { id, academicYrId },
            );
        }
    }

    async updateByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
        teacher: Partial<Pick<Teacher, "name" | "email" | "phone">>,
    ): Promise<Teacher> {
        try {
            return this.prismaTeacher.update({
                data: teacher,
                where: { id, academicYearId: academicYrId },
            });
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not update teacher by id and academic year id",
                { id, academicYrId, teacher },
            );
        }
    }

    async deleteByIdAndAcademicYrId(
        id: string,
        academicYrId: string,
    ): Promise<void> {
        try {
            await this.prismaTeacher.delete({
                where: { id, academicYearId: academicYrId },
            });
        } catch (err) {
            throw handleDBLevelError(
                err,
                "Could not delete teacher by id and academic year id",
                { id, academicYrId },
            );
        }
    }
}
