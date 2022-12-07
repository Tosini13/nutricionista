import * as React from "react";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createFaq } from "~/models/faq.server";
import invariant from "tiny-invariant";
import Input from "~/components/form/Input";
import Textarea from "~/components/form/Textarea";
import createIcon from "../../../../public/images/icons/plus-circle-fill.svg";
import type { ActionFunction } from "@remix-run/server-runtime";

export type ActionData = {
  errors?: {
    question?: null | string;
    answer?: null | string;
  };
  sent?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const question = formData.get("question");
  const answer = formData.get("answer");

  const errors: ActionData["errors"] = {
    question: question ? null : "Question is required",
    answer: answer ? null : "Answer is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  invariant(typeof question === "string", "name must be a string");
  invariant(typeof answer === "string", "email must be a string");

  const res = await createFaq({ question, answer });

  if (res.id) {
    return redirect("/admin/faqs");
  }
  return null;
};

export default function FaqCreateForm() {
  return (
    <Form method="post" data-testid="create_faq_form">
      <div>
        <Input id={"question"} name={"question"} />
        <Textarea
          id={"answer"}
          name={"answer"}
          rows={8}
          submitIcon={createIcon}
        />
      </div>
    </Form>
  );
}
