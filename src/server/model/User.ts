export const USER_ROLE = ["admin", "student_parent", "teacher"] as const;
export type TUserRole = (typeof USER_ROLE)[number];

export interface User {
    id: string;
    role: TUserRole;
    username: string;
    passwordHash: string;
}
