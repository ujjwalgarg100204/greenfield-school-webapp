import { z } from "zod";
import { hashString } from "../auth";
import { type User } from "../model/User";
import { type UserRepository } from "../model/repository/UserRepo";
import { UserValidator } from "../model/validator/UserValidator";

export interface UserService {
    findByRoleUsername(role: string, username: string): Promise<User | null>;
    findByRoleUsernamePasswordHash(
        role: string,
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
        role: string,
        username: string,
    ): Promise<User | null> {
        return await this.userRepo.findByRoleUsername(role, username);
    }

    public async findByRoleUsernamePasswordHash(
        role: string,
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
