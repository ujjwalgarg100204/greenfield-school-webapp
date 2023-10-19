"use server";

// import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export const signUp = async (email: string, passwordHash: string, role: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return "User with that email already exists.";
  }

  // const passwordHash = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
      role
    },
  });

  return "Successfully created new user!";
};
