import { json, LoaderFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getFaqs } from "~/models/faq.server";
import { sendEmail } from "~/utils/email.server";
import invariant from "tiny-invariant";
import { sendSelfEmail } from "~/utils/self-email.server";
import { verifyReCaptcha } from "~/utils/reCaptcha.server";
import HeaderModule from "~/modules/HeaderModule";
import HomeModule from "~/modules/HomeModule";
import AboutMeModule from "~/modules/AboutMeModule";
import ServicesModule from "~/modules/ServicesModule";
import VisitsModule from "~/modules/VisitsModule";
import PacksModule from "~/modules/PacksModule";
import FaqModule from "~/modules/FaqModule";
import ContactModule from "~/modules/ContactModule";
import FooterModule from "~/modules/FooterModule";
import { prisma } from "~/db.server";
import { IMG_PATH } from "~/utils/resources.server";
import { Service } from "@prisma/client";

export type ActionData = {
  errors?: {
    email?: null | string;
    name?: null | string;
    surname?: null | string;
    content?: null | string;
    reCaptcha?: null | string;
  };
  sent?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const name = formData.get("name");
  const surname = formData.get("surname");
  const content = formData.get("content");
  const reCaptcha = formData.get("g-recaptcha-response");

  const errors: ActionData["errors"] = {
    email: email ? null : "Email is required",
    name: name ? null : "Name is required",
    surname: surname ? null : "Surname is required",
    content: content ? null : "Content is required",
    reCaptcha: reCaptcha ? null : "required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  invariant(typeof email === "string", "email must be a string");
  invariant(typeof name === "string", "name must be a string");
  invariant(typeof surname === "string", "surname must be a string");
  invariant(typeof content === "string", "content must be a string");
  invariant(typeof reCaptcha === "string", "recaptcha must be a string");

  const responseRecCaptcha = await verifyReCaptcha(reCaptcha);

  if (!responseRecCaptcha.success) {
    return json<ActionData>({
      errors: {
        reCaptcha: "Not verified",
      },
    });
  }

  const approved = await sendEmail({
    email,
    name,
    surname,
  });

  const approvedSelf = await sendSelfEmail({
    email,
    name,
    surname,
    content: content,
  });

  if (!approved) {
    console.error("not sent to user!log!");
    return json<ActionData>({
      sent: false,
    });
  }

  if (!approvedSelf) {
    console.error("not sent to admin!log!");
    return json<ActionData>({
      sent: false,
    });
  }

  return json<ActionData>({
    sent: true,
  });
};

export type ServiceType = Service & { photos: Array<string> };

export type LoaderData = {
  faqs: Awaited<ReturnType<typeof getFaqs>>;
  services: Awaited<Array<Service & { photos: Array<string> }>>;
  siteKey?: string;
  serviceId: string | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const url = new URL(request.url);
  const serviceId = url.searchParams.get("serviceId");

  const services = await prisma.service.findMany();
  const photos = await prisma.photo.findMany();

  const servicesWithPhotos = services.map((service) => ({
    ...service,
    photos: photos
      .filter((photo) => photo.serviceId === service.id)
      .map((photo) => `${IMG_PATH}/${photo.filename}`),
  }));

  return json<LoaderData>({
    faqs: await getFaqs(),
    services: servicesWithPhotos,
    siteKey: SITE_KEY,
    serviceId,
  });
};

export default function Index() {
  const { faqs, services } = useLoaderData() as LoaderData;
  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <HomeModule />
        <AboutMeModule />
        <ServicesModule services={services} />
        <VisitsModule />
        <PacksModule />
        <FaqModule faqs={faqs} />
        <ContactModule />
      </main>
      <FooterModule services={services} />
    </>
  );
}
