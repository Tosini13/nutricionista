import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { SERVICES } from "./mock.data";

const prisma = new PrismaClient();

async function seed() {
  const email = process.env.DEV_ADMIN_EMAIL;
  const password = process.env.DEV_ADMIN_EMAIL_PASSWORD;

  if(!email){
    console.log(`Email is not set 🚫`);
    return;
  }
  
  if(!password){
    console.log(`Password is not set 🚫`);
    return;
  }
  
  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });


  const hashedPassword = await bcrypt.hash(password, 10);

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


  await Promise.all(
    SERVICES.map(({id, description, title, photos}) => (
      prisma.service.create({
        data: {
          id, description, title,
          photos: {
            create: photos
          }
        }
      })
    ))
  )


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
