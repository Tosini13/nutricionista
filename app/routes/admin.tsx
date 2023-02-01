import FooterModule from "~/modules/FooterModule";
import { LoaderFunction } from "@remix-run/server-runtime";
import { getUserId } from "~/session.server";
import { redirect } from "@remix-run/node";
import HeaderAdminModule from "~/modules/HeaderAdminModule";
import { Outlet } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  return null;
};

export default function AdminPage() {
  return (
    <>
      <HeaderAdminModule />
      <main>
        <Outlet />
      </main>
      <FooterModule />
    </>
  );
}
