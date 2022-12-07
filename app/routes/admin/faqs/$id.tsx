import * as React from "react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { getFaqs } from "~/models/faq.server";
import type { FAQ } from "~/models/faq.server";
import { Form, useLoaderData } from "@remix-run/react";
import Input from "~/components/form/Input";
import Textarea from "~/components/form/Textarea";

export type LoaderData = {
  faq?: FAQ;
};

export async function loader({ request, params }: LoaderArgs) {
  return json<LoaderData>({
    faq: await (await getFaqs()).find((faq) => faq.id === params.id),
  });
}

export default function FaqEditForm() {
  const { faq } = useLoaderData() as LoaderData;
  return (
    <Form method="post" data-testid="contact_form">
      <div>
        <Input id={`question`} name={`question`} defaultValue={faq?.question} />
        <Textarea
          id={`asnwer`}
          name={`asnwer`}
          defaultValue={faq?.answer}
          rows={8}
        />
      </div>
    </Form>
  );
}
