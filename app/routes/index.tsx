import { json } from "@remix-run/node";
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

export type LoaderData = {
  faqs: Awaited<ReturnType<typeof getFaqs>>;
  siteKey?: string;
};

export const loader = async () => {
  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

  return json<LoaderData>({
    faqs: await getFaqs(),
    siteKey: SITE_KEY,
  });
};

export default function Index() {
  const { faqs } = useLoaderData() as LoaderData;
  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <HomeModule />
        <AboutMeModule />
        <ServicesModule />
        <VisitsModule />
        <PacksModule />
        <FaqModule faqs={faqs} />
        <ContactModule />
      </main>
      <FooterModule />
    </>
  );
}
