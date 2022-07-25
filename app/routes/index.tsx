import Header from "~/components/header/Header";

export default function Index() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <h1>main</h1>
      </main>
    </>
  );
}
