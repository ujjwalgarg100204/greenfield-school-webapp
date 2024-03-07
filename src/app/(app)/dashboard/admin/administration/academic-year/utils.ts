import { type AcademicYear } from "@prisma/client";

export const getAcademicStr = (academicYear: AcademicYear): string => {
    return `${academicYear.startDate.getFullYear()}-${academicYear.endDate.getFullYear()}`;
};

export const getLatestAcademicYear = (academicYears: AcademicYear[]) => {
    const sortedAcademicYears = [...academicYears].sort(
        (a, b) => b.endDate.getTime() - a.endDate.getTime(),
    );
    return sortedAcademicYears[0]!;
};
