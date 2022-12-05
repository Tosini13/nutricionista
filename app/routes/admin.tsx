import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/server-runtime";
import Footer from "~/components/footer/Footer";
import { getUserId } from "~/session.server";
import { Outlet } from "@remix-run/react";
import HeaderModule from "~/modules/admin/HeaderModule";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) return redirect("/login");
  return json({});
}

export default function Admin() {
  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-screen-xl overflow-x-hidden bg-white xl:mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
