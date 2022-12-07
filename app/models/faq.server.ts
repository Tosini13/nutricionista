import type { Faq } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getFaqs() {
  return prisma.faq.findMany();
}

export async function createFaq({ question, answer }: Omit<Faq, "id">) {
  return await prisma.faq.create({
    data: {
      question,
      answer,
    },
  });
}

export async function deleteFaq({ id }: Pick<Faq, "id">) {
  return await prisma.faq.delete({
    where: { id },
  });
}
