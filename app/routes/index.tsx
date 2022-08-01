import Header from "~/components/header/Header";
import Home from "~/components/sections/Home";
import SobreMi from "~/components/sections/SobreMi";

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center md:block">
        <Home />
        <SobreMi />
      </main>
    </>
  );
}
