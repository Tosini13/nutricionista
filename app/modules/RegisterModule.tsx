import { Form } from "@remix-run/react";
import { Button } from "~/components/form/Button";
import Input from "~/components/form/Input";
import ReCaptcha from "~/components/form/ReCaptcha";
import SectionTitle from "~/components/sections/SectionTitle";
import { ActionData } from "~/routes/register";

type RegisterModulePropsType = {
  errors: ActionData["errors"];
  siteKey?: string;
};

const RegisterModule: React.FC<RegisterModulePropsType> = ({
  errors,
  siteKey,
}) => {
  return (
    <div data-test-id="register_module" className="text-white">
      <SectionTitle className="text-center">Login</SectionTitle>
      <Form method="post" data-test-id="login_form" className="space-y-10">
        <Input
          id="email"
          data-testid="login-input-email"
          placeholder="Email"
          name="email"
          type="email"
          error={errors?.email}
        />
        <Input
          id="password"
          data-testid="login-input-email"
          placeholder="Password"
          name="password"
          type="password"
          error={errors?.password}
        />
        <div className="flex justify-center">
          <ReCaptcha siteKey={siteKey} error={errors?.reCaptcha} />
        </div>
        <Button
          secondary
          bigger
          className="mx-auto w-fit uppercase hover-hover:hover:bg-primary hover-hover:hover:text-white"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default RegisterModule;
