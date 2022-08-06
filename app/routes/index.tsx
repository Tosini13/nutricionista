import Header from "~/components/header/Header";
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
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center md:block">
        <Home />
        <SobreMi />
        <Servicios />
        <OnlineVisits />
        <Packs />
        <Visits />
        <Faqs />
      </main>
    </>
  );
}
