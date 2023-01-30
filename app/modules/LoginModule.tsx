import * as React from "react";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import Input from "~/components/form/Input";
import SectionTitle from "~/components/sections/SectionTitle";

import ReCaptcha from "~/components/form/ReCaptcha";
import { Button } from "~/components/form/Button";
import { ActionData, LoaderData } from "~/routes/login";

type LoginModulePropsType = {};

const LoginModule: React.FC<LoginModulePropsType> = ({}) => {
  const { siteKey } = useLoaderData() as LoaderData;

  const result = useActionData<ActionData>();

  return (
    <div data-test-id="login_module" className="text-white">
      <SectionTitle className="text-center">Login</SectionTitle>
      <Form method="post" data-test-id="login_form" className="space-y-10">
        <Input
          id="email"
          data-testid="login-input-email"
          placeholder="Email"
          name="email"
          type="email"
          error={result?.errors?.email}
        />
        <Input
          id="password"
          data-testid="login-input-email"
          placeholder="Password"
          name="password"
          type="password"
          error={result?.errors?.password}
        />
        <div className="flex justify-center">
          <ReCaptcha siteKey={siteKey} error={result?.errors?.reCaptcha} />
        </div>
        <Button
          secondary
          bigger
          className="mx-auto w-fit uppercase hover-hover:hover:bg-primary hover-hover:hover:text-white"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginModule;
