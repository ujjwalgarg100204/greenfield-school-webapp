export const USER_ROLE = ["admin", "teacher", "student_parent"] as const;
export type TUserRole = (typeof USER_ROLE)[number];

export interface User {
    id: string;
    role: TUserRole;
    username: string;
    passwordHash: string;
}
