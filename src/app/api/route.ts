import { NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function GET(request: Request): Promise<NextResponse> {
  const session = await getServerSession(authOptions);
  console.log("GET API", session);
  return NextResponse.json({ authenticated: !!session });
}
