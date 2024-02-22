import { z } from "zod";

export enum UserRole {
    ADMIN = "admin",
    STUDENT = "student",
    TEACHER = "teacher",
    PARENT = "parent",
}

interface UserValidator {
    validateRole(role: string | UserRole): boolean;
    validateUsername(username: string): boolean;
    validatePassword(password: string): boolean;
    validatePasswordHash(passwordHash: string): boolean;
}

export class User {
    private id: string;
    private role: string;
    private username: string;
    private passwordHash: string;

    constructor() {
        this.id = "";
        this.role = "";
        this.username = "";
        this.passwordHash = "";
    }

    public getId(): string {
        return this.id;
    }

    public getRole(): string {
        return this.role;
    }

    public getUsername(): string {
        return this.username;
    }

    public getPasswordHash(): string {
        return this.passwordHash;
    }

    public setId(id: string): this {
        this.id = id;
        return this;
    }

    public setRole(role: UserRole): this {
        this.role = role;
        return this;
    }

    public setUsername(username: string): this {
        z.string().min(3).max(16);
        this.username = username;
        return this;
    }

    public setPasswordHash(passwordHash: string): this {
        this.passwordHash = passwordHash;
        return this;
    }
}
