import Footer from "~/components/footer/Footer";
import Contact from "~/components/sections/Contact";
import Faqs from "~/components/sections/faq";
import Home from "~/components/sections/Home";
import OnlineVisits from "~/components/sections/OnlineVisits";
import Packs from "~/components/sections/Packs";
import Servicios from "~/components/sections/Servicios";
import SobreMi from "~/components/sections/SobreMi";
import Visits from "~/components/sections/Visits";
import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getFaqs } from "~/models/faq.server";
import { sendEmail } from "~/utils/email.server";
import invariant from "tiny-invariant";
import HeaderModule from "~/modules/HeaderModule";

export type ActionData = {
  errors?: {
    email?: null | string;
    name?: null | string;
    surname?: null | string;
    content?: null | string;
  };
  sent?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const name = formData.get("name");
  const surname = formData.get("surname");
  const content = formData.get("content");

  const errors: ActionData["errors"] = {
    email: email ? null : "Email is required",
    name: name ? null : "Name is required",
    surname: surname ? null : "Surname is required",
    content: content ? null : "Content is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  invariant(typeof email === "string", "email must be a string");
  invariant(typeof name === "string", "name must be a string");
  invariant(typeof surname === "string", "surname must be a string");
  invariant(typeof content === "string", "content must be a string");

  const approved = await sendEmail({
    email,
    name,
    surname,
    content: content,
  });

  if (!approved) {
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
};

export const loader = async () => {
  return json<LoaderData>({
    faqs: await getFaqs(),
  });
};

export default function Index() {
  const { faqs } = useLoaderData() as LoaderData;
  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-screen-xl overflow-x-hidden bg-white xl:mx-auto">
        <Home />
        <SobreMi />
        <Servicios />
        <OnlineVisits />
        <Packs />
        <Visits />
        <Faqs faqs={faqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
