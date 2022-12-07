import * as React from "react";
import { Form } from "@remix-run/react";
import Input from "~/components/form/Input";
import Textarea from "~/components/form/Textarea";
import createIcon from "../../../../public/images/icons/plus-circle-fill.svg";

export default function FaqCreateForm() {
  return (
    <Form method="post" data-testid="contact_form">
      <div>
        <Input id={`question`} name={`question`} />
        <Textarea
          id={`asnwer`}
          name={`asnwer`}
          rows={8}
          submitIcon={createIcon}
        />
      </div>
    </Form>
  );
}
