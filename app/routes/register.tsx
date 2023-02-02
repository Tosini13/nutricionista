import * as React from "react";
import type { ActionArgs, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";

import { createUserSession, getUserId } from "~/session.server";
import { createUser, validateEmailRights } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import HeaderModule from "~/modules/HeaderModule";
import FooterModule from "~/modules/FooterModule";
import Section from "~/components/sections/Section";
import RegisterModule from "~/modules/RegisterModule";
import { prisma } from "~/db.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const reCaptcha = formData.get("g-recaptcha-response");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/admin");

  const errors: ActionData["errors"] = {
    email: email ? null : "Email is required",
    password: password ? null : "Password is required",
    reCaptcha: reCaptcha ? null : "ReCaptcha is required against bots",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>({ errors });
  }

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is invalid" } },
      { status: 400 }
    );
  }

  if (password.length < 7) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const userExists = await prisma.user.findFirst({
    where: { email },
  });
  if (userExists) {
    return json(
      {
        errors: {
          email: "User with this email already exists.",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  if (!validateEmailRights(email)) {
    return json(
      {
        errors: {
          email: "You don't have right to create users.",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  if (!user) {
    return json(
      {
        errors: {
          email: "Something went wrong trying to create a new user.",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export type ActionData = {
  errors?: {
    email?: null | string;
    password?: null | string;
    reCaptcha?: null | string;
  };
  sent?: boolean;
};

export type LoaderData = {
  siteKey?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const userId = await getUserId(request);

  if (userId) {
    return redirect("/");
  }

  return json<LoaderData>({
    siteKey: SITE_KEY,
  });
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const { siteKey } = useLoaderData() as LoaderData;

  const result = useActionData<ActionData>();

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <>
      <HeaderModule />
      <main className="flex min-h-full max-w-none flex-col items-center justify-center bg-[#7B4A53]">
        <Section className="md:pt-10">
          <RegisterModule errors={result?.errors} siteKey={siteKey} />
        </Section>
      </main>
      <FooterModule />
    </>
  );
}
