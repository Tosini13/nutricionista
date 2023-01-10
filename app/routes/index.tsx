import Footer from "~/components/footer/Footer";
import Header from "~/components/header/Header";
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
import { sendSelfEmail } from "~/utils/self-email.server";
import { verifyReCaptcha } from "~/utils/reCaptcha.server";

export type ActionData = {
  errors?: {
    email?: null | string;
    name?: null | string;
    surname?: null | string;
    content?: null | string;
    recaptcha?: null | string;
  };
  sent?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const name = formData.get("name");
  const surname = formData.get("surname");
  const content = formData.get("content");
  const recaptcha = formData.get("g-recaptcha-response");
  console.log("recaptcha !log!", recaptcha);

  const errors: ActionData["errors"] = {
    email: email ? null : "Email is required",
    name: name ? null : "Name is required",
    surname: surname ? null : "Surname is required",
    content: content ? null : "Content is required",
    recaptcha: recaptcha ? null : "Recaptcha is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  invariant(typeof email === "string", "email must be a string");
  invariant(typeof name === "string", "name must be a string");
  invariant(typeof surname === "string", "surname must be a string");
  invariant(typeof content === "string", "content must be a string");
  invariant(typeof recaptcha === "string", "recaptcha must be a string");

  const responseRecCaptcha = await verifyReCaptcha(recaptcha);
  console.log("--------------------------------------------- !log!");
  console.log("responseRecCaptcha !log!", responseRecCaptcha);

  const reader = responseRecCaptcha.body?.getReader();
  const result = new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader?.read().then(({ done, value }) => {
          // When no more data needs to be consumed, close the stream
          if (done) {
            controller.close();
            return;
          }
          // Enqueue the next data chunk into our target stream
          controller.enqueue(value);
          return pump();
        });
      }
    },
  });
  console.log("result !log!", result);

  if (!responseRecCaptcha) {
    return json<ActionData>({
      errors: {
        recaptcha: "Not verified",
      },
    });
  }

  if (responseRecCaptcha) {
    return json<ActionData>({
      errors: {
        recaptcha: "Well done!",
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
  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY_DEV;

  return json<LoaderData>({
    faqs: await getFaqs(),
    siteKey: SITE_KEY,
  });
};

export default function Index() {
  const { faqs } = useLoaderData() as LoaderData;
  return (
    <>
      <Header />
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
