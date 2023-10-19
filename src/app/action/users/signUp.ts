"use server";

import { prisma } from "@/lib/prisma";

export const signUp = async (email: string, passwordHash: string, role: string) => {
  const user= await prisma.user.findUnique({
    where: {
      email,
    }
  })

  if (user) {
    return "User with that email already exists.";
  }


  return "Successfully created new user!";
};
