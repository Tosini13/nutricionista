import React from "react";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import { ActionData, LoaderData } from "~/routes";
import Textarea from "~/components/form/Textarea";
import Input from "~/components/form/Input";
import ReCaptcha from "~/components/form/ReCaptcha";
import Button from "~/components/form/Button";
import sendIcon from "../../public/img/icons/send.icon.svg";

const inputClassName = "mb-4 sm:mb-0";

type ContactModulePropsType = {};

const ContactModule: React.FC<ContactModulePropsType> = ({}) => {
  const { siteKey } = useLoaderData() as LoaderData;

  const result = useActionData<ActionData>();

  const ref = React.useRef<HTMLFormElement | null>(null);

  React.useMemo(() => {
    if (result?.sent === true && ref.current) {
      ref.current.reset();
    }
  }, [result?.sent]);

  return (
    <Section
      data-test-id="contact_module"
      id="contact"
      className="max-w-none bg-[#7B4A53] text-white"
    >
      <div className="mx-auto max-w-screen-lg">
        <SectionTitle className="text-center">Contacto</SectionTitle>
        <Paragraph className="mb-10 text-center text-lg font-medium leading-9">
          Si tienes alguna duda escríbeme y me
          <br />
          pondré en contacto contigo lo antes posible
        </Paragraph>
        <Form ref={ref} method="post" data-testid="contact_form">
          <div className="flex space-x-16">
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
            className="mx-auto w-fit uppercase hover-hover:hover:bg-primary hover-hover:hover:text-white"
          >
            <img className="mr-6" src={sendIcon} alt={"send icon"} />
            envía tu mensaje
          </Button>
        </Form>
      </div>
    </Section>
  );
};

export default ContactModule;
