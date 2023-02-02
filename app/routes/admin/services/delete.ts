import { ActionFunction, json, redirect } from "@remix-run/node";
import { prisma } from "~/db.server";
import invariant from "tiny-invariant";

export type ActionData = {
  errors?: {
    id?: null | string;
    title?: null | string;
    description?: null | string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const serviceId = formData.get("serviceId");

  const errors: ActionData["errors"] = {
    id: serviceId ? null : "Wrong ID number",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  invariant(typeof serviceId === "string", "Id wasn't provided");
  const service = await prisma.service.delete({
    where: {
      id: serviceId,
    },
  });

  if (service) {
    return redirect(`/admin/services`);
  } else {
    const hasErrors = Object.values(errors).some(
      (errorMessage) => errorMessage
    );
    console.log("hasErrors though !log", hasErrors);

    return redirect(`/admin/services/${serviceId}`);
  }
};