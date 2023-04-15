import React from "react";
import { useActionData, useLoaderData } from "@remix-run/react";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import { ActionData, LoaderData } from "~/routes";
import ContactForm from "~/components/ContactForm";

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
      className="mx-0 max-w-none bg-[#7B4A53] text-white"
    >
      <div className="mx-2 max-w-screen-lg md:mx-auto">
        <SectionTitle className="text-center text-secondary md:text-white">
          Contacto
        </SectionTitle>
        <Paragraph className="mx-auto mb-10 max-w-md text-left text-lg font-medium leading-9 sm:text-center">
          Si tienes alguna duda escríbeme y me pondré en contacto contigo lo
          antes posible
        </Paragraph>
        <ContactForm result={result} siteKey={siteKey} ref={ref} />
      </div>
    </Section>
  );
};

export default ContactModule;
