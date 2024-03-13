import crypto from "crypto";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import "server-only";
import { z } from "zod";
import { env } from "~/env";
import { type User } from "./model/User";
import { UserRepositoryImpl } from "./model/repository/user.repository";
import { UserValidator } from "./model/validator/user.validator";
import { UserServiceImpl, type UserService } from "./service/user.service";

const key = new TextEncoder().encode(env.JWT_SECRET);
const alg = "HS256";

export type JWTPayload = {
    user: Pick<User, "id" | "username" | "role">;
    expires: Date;
};

export const encrypt = async (payload: JWTPayload): Promise<string> => {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("30days")
        .sign(key);
};

export const decrypt = async (input: string): Promise<JWTPayload> => {
    const { payload } = await jwtVerify(input, key, { algorithms: [alg] });
    return payload as JWTPayload;
};

export const hashString = (input: string, salt = 10): string => {
    let inputStr = input,
        hashed = "";
    for (let i = 0; i < salt; i++) {
        hashed = crypto.createHash("sha256").update(inputStr).digest("hex");
        inputStr = hashed;
    }
    return hashed;
};

export const login = async (
    credentials: Pick<User, "username" | "role"> & { password: string },
): Promise<void> => {
    // Verify credentials && get the user
    const parsed = UserValidator.getCreateNewUserSchema()
        .omit({ passwordHash: true })
        .extend({ password: z.string() })
        .parse(credentials);
    const userService: UserService = new UserServiceImpl(
        new UserRepositoryImpl(),
    );

    const userFromDb = await userService.findByRoleUsernamePasswordHash(
        parsed.role,
        parsed.username,
        hashString(parsed.password),
    );
    if (userFromDb === null) {
        throw new Error(
            "Invalid credentials, no user with given role, username & password exists",
        );
    }

    // create the session
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const session = await encrypt({
        user: {
            // FIXME: id here might be redundant
            id: userFromDb.id,
            role: userFromDb.role,
            username: userFromDb.username,
        },
        expires,
    });

    // save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
};

export const logout = async (): Promise<void> => {
    // destroy the session
    cookies().set("session", "", { expires: new Date(0) });
};

export const getServerAuthSession = async (): Promise<JWTPayload | null> => {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
};

export const updateSession = async (req: NextRequest) => {
    const session = req.cookies.get("session")?.value;
    if (!session) return;

    // refresh the session so it doesn't expires
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        expires: parsed.expires,
    });
    return res;
};
