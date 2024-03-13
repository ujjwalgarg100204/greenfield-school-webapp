import { db } from "~/server/db";
import { type UserRole, type User } from "@prisma/client";
import { UserValidator } from "../validator/user.validator";

export interface UserRepository {
    create(user: Omit<User, "id">): Promise<User>;
    findByRoleUsernamePasswordHash(
        role: UserRole,
        username: string,
        passwordHash: string,
    ): Promise<User | null>;
    findByRoleUsername(role: UserRole, username: string): Promise<User | null>;
}

export class UserRepositoryImpl implements UserRepository {
    public async findByRoleUsername(
        role: UserRole,
        username: string,
    ): Promise<User | null> {
        const user = await db.user.findFirst({
            where: {
                role,
                username,
            },
        });

        return user ? UserValidator.getUserObjSchema().parse(user) : null;
    }

    public async findByRoleUsernamePasswordHash(
        role: UserRole,
        username: string,
        passwordHash: string,
    ): Promise<User | null> {
        const user = await db.user.findFirst({
            where: {
                role,
                username,
                passwordHash,
            },
        });

        return user ? UserValidator.getUserObjSchema().parse(user) : null;
    }

    public async create(user: Omit<User, "id">): Promise<User> {
        const parsed = UserValidator.getCreateNewUserSchema().parse(user);
        const newUser = await db.user.create({ data: { ...parsed } });
        return UserValidator.getUserObjSchema().parse(newUser);
    }
}
