import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { faqs } from "./mock_data";

const prisma = new PrismaClient();

async function seed() {
  const email = process.env.DEV_EMAIL ?? "";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash(process.env.DEV_PASSWORD ?? "", 10);

  await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  for (const faq of faqs) {
    await prisma.faq.upsert({
      where: { id: faq.id },
      update: faq,
      create: faq,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
