import * as React from "react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction, LoaderArgs } from "@remix-run/server-runtime";
import { getUserId } from "~/session.server";
import { getFaqs } from "~/models/faq.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import Faq from "~/components/faqs/Faq";
import createIcon from "../../../public/images/icons/plus-circle-fill.svg";
import editIcon from "../../../public/images/icons/pencil-fill.svg";
import deleteIcon from "../../../public/images/icons/trash-fill.svg";
import { Form } from "@remix-run/react";
import invariant from "tiny-invariant";
import { prisma } from "~/db.server";

export type ActionData = {
  errors?: {
    question?: null | string;
    answer?: null | string;
  };
  sent?: boolean;
};

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get("_method") !== "delete") {
    throw new Response(`The _method ${form.get("_method")} is not supported`, {
      status: 400,
    });
  }
  const faqId = form.get("_faqId");

  invariant(typeof faqId === "string", "name must be a string");

  const faq = await prisma.faq.findUnique({
    where: { id: faqId },
  });
  if (!faq) {
    throw new Response("Can't delete what does not exist", {
      status: 404,
    });
  }
  await prisma.faq.delete({ where: { id: faqId } });
  return redirect("/admin/faqs");
};

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
          className="group mx-auto flex w-fit cursor-pointer items-center gap-x-2 p-6"
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
            <Form method="post" data-testid="delete_faq_form">
              <input type="hidden" name="_faqId" value={faq.id} />
              <input type="hidden" name="_method" value="delete" />
              <button
                type="submit"
                className="absolute top-0 right-0 translate-y-[50px] -translate-x-[50%]"
              >
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  width={32}
                  className="grayscale hover:grayscale-0"
                />
              </button>
            </Form>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
