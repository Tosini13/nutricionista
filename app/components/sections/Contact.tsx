import React from "react";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

const inputClassName = "mb-4 sm:mb-0";

type TContactProps = {};

const Contact: React.FC<TContactProps> = () => {
  return (
    <Section id="contact">
      <SectionTitle className="text-center">Contacto</SectionTitle>
      <Paragraph className="mb-10 text-center text-lg font-medium leading-9 text-gray">
        Si tienes alguna duda escríbeme y me
        <br />
        pondré en contacto contigo lo antes posible
      </Paragraph>
      <form>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-4">
          <div className="mb-8  flex flex-col sm:mb-0">
            <h4 className="mb-8 text-center sm:text-left">Tu mensaje:</h4>
            <Textarea
              placeholder={"¿Cual es tu objetivo?"}
              className={"resize-none"}
              rows={8}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="mb-8 text-center sm:text-left ">Tu contacto:</h4>
            <div className="flex grow flex-col justify-between pb-2">
              <Input
                placeholder="Nombre"
                name="name"
                containerClassName={inputClassName}
              />
              <Input
                placeholder="Apellido"
                name="surname"
                containerClassName={inputClassName}
              />
              <Input
                placeholder="E-mail"
                name="email"
                type="email"
                containerClassName={inputClassName}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-8">
        <h4 className="mb-8 text-center lg:text-left">Mi contacto:</h4>
        <div className="mx-auto my-2 rounded-3xl shadow-md sm:w-max lg:mx-0">
          <table className="border-separate border-spacing-x-8 border-spacing-y-4">
            <tbody>
              <tr>
                <td>E-mail</td>
                <td className="text-right font-semibold">Esther@gmail.com</td>
              </tr>
              <tr className="">
                <td>Numero de telefono:</td>
                <td className="text-right font-semibold">+ 00000000000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
