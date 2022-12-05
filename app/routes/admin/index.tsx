import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/server-runtime";
import Footer from "~/components/footer/Footer";
import Button from "~/components/form/Button";
import Header from "~/components/header/Header";
import type { LinkType } from "~/components/header/Header";
import { getUserId } from "~/session.server";

const MENU_LINKS: Array<LinkType> = [
  { href: "#servicios", title: "servicios" },
  { href: "#packs", title: "packs" },
  { href: "#faq", title: "FAQ" },
  { href: "#contact", title: "contact" },
];

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) return redirect("/admin/login");
  return json({});
}

export default function Admin() {
  return (
    <>
      <Header links={MENU_LINKS} />
      <main className="relative min-h-screen max-w-screen-xl overflow-x-hidden bg-white xl:mx-auto">
        Admin page
        <form action="/admin/logout" method="post">
          <Button type="submit">Log Out</Button>
        </form>
      </main>
      <Footer />
    </>
  );
}
