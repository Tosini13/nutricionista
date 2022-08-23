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

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative mx-2 min-h-screen  max-w-screen-xl bg-white sm:mx-6 xl:mx-auto">
        <Home />
        <SobreMi />
        <Servicios />
        <OnlineVisits />
        <Packs />
        <Visits />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
