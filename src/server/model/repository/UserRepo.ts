import { db } from "~/server/db";
import { type User } from "../User";
import { UserValidator } from "../validator/UserValidator";

export interface UserRepository {
    create(user: Omit<User, "id">): Promise<User>;
    findByRoleUsernamePasswordHash(
        role: string,
        username: string,
        passwordHash: string,
    ): Promise<User | null>;
    findByRoleUsername(role: string, username: string): Promise<User | null>;
}

export class UserRepositoryImpl implements UserRepository {
    public async findByRoleUsername(
        role: string,
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
        role: string,
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
