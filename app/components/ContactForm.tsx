import React from "react";
import { Form } from "@remix-run/react";
import { ActionData } from "~/routes";
import Textarea from "~/components/form/Textarea";
import Input from "~/components/form/Input";
import ReCaptcha from "~/components/form/ReCaptcha";
import sendIcon from "../../public/img/icons/send.icon.svg";
import { Button } from "~/components/form/Button";

const inputClassName = "mb-4 sm:mb-0";

type ContactFormPropsType = {
  result?: ActionData;
  siteKey?: string;
};

const ContactForm = React.forwardRef<HTMLFormElement, ContactFormPropsType>(
  ({ result, siteKey }, ref) => {
    return (
      <div data-testid="contact_form">
        <Form
          ref={ref}
          method="post"
          data-testid="contact_form"
          className="space-y-8"
        >
          <div className="flex flex-col space-y-8 md:flex-row  md:space-y-0 md:space-x-16">
            <div className="min-w-[300px] space-y-8 lg:min-w-[40%]">
              <Input
                id="name"
                data-testid="contact-input-name"
                placeholder="Nombre"
                name="name"
                containerClassName={inputClassName}
                error={result?.errors?.name && "Este campo es obligatorio"}
              />
              <Input
                id="surname"
                data-testid="contact-input-surname"
                placeholder="Apellido"
                name="surname"
                containerClassName={inputClassName}
                error={result?.errors?.surname && "Este campo es obligatorio"}
              />
              <Input
                id="email"
                data-testid="contact-input-email"
                placeholder="E-mail"
                name="email"
                type="email"
                containerClassName={inputClassName}
                error={result?.errors?.email && "Este campo es obligatorio"}
              />
            </div>
            <div className="flex-grow">
              <Textarea
                id="content"
                data-testid="contact-textarea-content"
                placeholder={"¿Cual es tu objetivo?"}
                rows={1}
                name="content"
                error={result?.errors?.content && "Este campo es obligatorio"}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <ReCaptcha siteKey={siteKey} error={result?.errors?.reCaptcha} />
          </div>
          <Button
            secondary
            bigger
            type="submit"
            className="mx-auto w-fit px-5 uppercase hover-hover:hover:bg-primary hover-hover:hover:text-white"
          >
            <img className="mr-2" src={sendIcon} alt={"send icon"} />
            envía tu mensaje
          </Button>
        </Form>
      </div>
    );
  }
);

export default ContactForm;
