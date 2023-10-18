import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("test", 12);

  const user = await prisma.user.upsert({
    where: {
      email: "priyanshkotak1@gmail.com",
    },
    update: {},
    create: {
      email: "priyanshkotak1@gmail.com",
      name: "Priyansh",
      password,
    },
  });

  console.log("User inside the db ", { user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
