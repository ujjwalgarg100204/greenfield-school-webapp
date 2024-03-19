import { type User, type UserRole } from "@prisma/client";
import { hashString } from "../auth";
import { UserRepositoryImpl, type UserRepository } from "../model/repository/user.repository";
import { UserValidator } from "../model/validator/user.validator";

export interface UserService {
    findByRoleUsername(role: UserRole, username: string): Promise<User | null>;
    findByRoleUsernamePasswordHash(
        role: UserRole,
        username: string,
        password: string,
    ): Promise<User | null>;
    createNewUser(
        user: Pick<User, "username" | "role"> & { password: string },
    ): Promise<User>;
}

export class UserServiceImpl implements UserService {
    private readonly userRepo: UserRepository;

    public constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    public async findByRoleUsername(
        role: UserRole,
        username: string,
    ): Promise<User | null> {
        return await this.userRepo.findByRoleUsername(role, username);
    }

    public async findByRoleUsernamePasswordHash(
        role: UserRole,
        username: string,
        passwordHash: string,
    ): Promise<User | null> {
        return await this.userRepo.findByRoleUsernamePasswordHash(
            role,
            username,
            passwordHash,
        );
    }

    public async createNewUser(
        user: Pick<User, "username" | "role"> & { password: string },
    ): Promise<User> {
        // verify input
        const parsedInput = UserValidator.getUserSignInFormSchema().parse(user);

        // check if user already exists
        const foundUser = await this.findByRoleUsername(
            parsedInput.role,
            parsedInput.username,
        );
        if (foundUser !== null) throw new Error("User already exists");

        // create the new user
        const passwordHash = hashString(parsedInput.password);
        return await this.userRepo.create({
            role: parsedInput.role,
            username: parsedInput.username,
            passwordHash,
        });
    }
}

// new UserServiceImpl(new UserRepositoryImpl()).createNewUser({
//     role: "admin",
//     username: "Priaynsh",
//     password: "123456",
// });

// new UserServiceImpl(new UserRepositoryImpl().createNewUser({
//     role: "admin",
//     username: "Priaynsh",
//     password: "123456",
// }))
