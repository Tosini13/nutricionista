import { Form, useLoaderData } from "@remix-run/react";

import { ActionFunction, json, LoaderArgs, redirect } from "@remix-run/node";
import { prisma } from "~/db.server";
import invariant from "tiny-invariant";
import Paragraph from "~/components/sections/Paragraph";
import { useNavigate } from "@remix-run/react";
import Input from "~/components/form/Input";
import Textarea from "~/components/form/Textarea";
import { Button } from "~/components/form/Button";
import { CancelIcon, OkIcon } from "~/components/icons";
import React from "react";
import Section from "~/components/sections/Section";

export type ActionData = {
  errors?: {
    id?: null | string;
    title?: null | string;
    description?: null | string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const description = formData.get("description");

  const errors: ActionData["errors"] = {
    title: title ? null : "Title is required",
    description: description ? null : "Description is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  invariant(typeof title === "string", "email must be a string");
  invariant(typeof description === "string", "name must be a string");

  const service = await prisma.service.create({
    data: { title, description },
  });

  return redirect(`/admin/services?serviceId=${service.id}`);
};

type ServiceAdminPropsType = {};

const ServiceAdmin: React.FC<ServiceAdminPropsType> = ({}) => {
  const navigate = useNavigate();
  const goBack = React.useCallback(() => navigate(-1), [navigate]);

  return (
    <Section data-test-id="service_admin" first>
      <Form action="." method="post">
        <div
          data-test-id="service_form"
          className="mx-auto mb-2 max-w-screen-md space-y-8 rounded-lg bg-[#7B4A53] p-4 text-white"
        >
          <Input
            id="title"
            name="title"
            className="text-semibold"
            placeholder="Title"
          />
          <Textarea
            placeholder="Description"
            id="description"
            name="description"
            rows={10}
          />
          <div className="flex space-x-2">
            <Button icon={<CancelIcon />} onClick={goBack}>
              Cancel
            </Button>
            <Button type="submit" secondary icon={<OkIcon />}>
              Create
            </Button>
          </div>
        </div>
      </Form>
    </Section>
  );
};

export default ServiceAdmin;
