import FooterModule from "~/modules/FooterModule";
import { LoaderFunction } from "@remix-run/server-runtime";
import { getUserId } from "~/session.server";
import { redirect } from "@remix-run/node";
import HeaderAdminModule from "~/modules/HeaderAdminModule";

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
      <main className="relative min-h-screen max-w-none">ADMIN</main>
      <FooterModule />
    </>
  );
}
