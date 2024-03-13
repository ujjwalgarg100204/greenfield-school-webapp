import { NextResponse, type NextRequest } from "next/server";
import { getServerAuthSession, updateSession } from "./server/auth";
import { UserRole } from "@prisma/client";

export const middleware = async (req: NextRequest) => {
    // if an unauthenticated user tries to access dashboard, redirect
    // him/her to login page
    const session = await getServerAuthSession();
    const url = req.nextUrl.pathname;
    if (url.startsWith("/dashboard")) {
        if (!session) return NextResponse.redirect(new URL("/login", req.url));
        // if user with one role tries to access another role's
        // resources then redirect them back to root
        const { role } = session.user;
        if (
            !(
                (role === UserRole.ADMIN &&
                    url.startsWith("/dashboard/admin")) ||
                (role === UserRole.TEACHER &&
                    url.startsWith("/dashboard/teacher")) ||
                (role === UserRole.STUDENT_PARENT &&
                    url.startsWith("/dashboard/student_parent"))
            )
        ) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    // if its login page send them back to root
    if (url.startsWith("/login") && session !== null) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return await updateSession(req);
};
