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
import { useLoaderData } from "@remix-run/react";
import { getFaqs } from "~/models/faq.server";

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
