import * as React from "react";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { getUserId } from "~/session.server";
import { getFaqs } from "~/models/faq.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import Faq from "~/components/faqs/Faq";
import createIcon from "../../../public/images/icons/plus-circle-fill.svg";
import editIcon from "../../../public/images/icons/pencil-fill.svg";

export type LoaderData = {
  faqs: Awaited<ReturnType<typeof getFaqs>>;
};

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) return redirect("/login");
  return json<LoaderData>({
    faqs: await getFaqs(),
  });
}

export default function Faqs() {
  const { faqs } = useLoaderData() as LoaderData;
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <a
          className="group flex cursor-pointer items-center gap-x-2 p-6 transition-all duration-300 hover:bg-gray"
          href={"/admin/faqs/create"}
        >
          <p>Create new one</p>
          <img
            src={createIcon}
            alt="create icon"
            width={32}
            className="grayscale group-hover:grayscale-0"
          />
        </a>
        {faqs.map((faq) => (
          <div key={faq.id} className="relative">
            <Faq faq={faq} />
            <a
              className="absolute top-0 right-0 translate-y-[20px] -translate-x-[50%]"
              href={`/admin/faqs/${faq.id}`}
            >
              <img
                src={editIcon}
                alt="edit icon"
                width={32}
                className="grayscale hover:grayscale-0"
              />
            </a>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
