import React from "react";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import sendIcon from "../../../public/images/send_icon.svg";
import withIcon from "../form/withIcon";

type TContactProps = {};

const Contact: React.FC<TContactProps> = () => {
  const TextareaWithIcon = withIcon(Textarea);

  return (
    <section id="#contact" className="mx-20 min-h-[75vh]">
      <SectionTitle className="text-center">Contacto</SectionTitle>
      <Paragraph className="text-md text-center">
        Si tienes alguna duda escríbeme y me
        <br />
        pondré en contacto contigo lo antes posible
      </Paragraph>
      <form>
        <div className="grid grid-cols-2 gap-x-4">
          <Header>Tu mensaje:</Header>
          <Header>Tu contacto:</Header>
          <div>
            <TextareaWithIcon
              props={{
                placeholder: "¿Cual es tu objetivo?",
                className: "resize-none",
                rows: 7,
              }}
              iconProps={{
                src: sendIcon,
                alt: "send icon",
              }}
            />
          </div>
          <div className="flex flex-col justify-between">
            <Input placeholder="Nombre" name="name" />
            <Input placeholder="Apellido" name="surname" />
            <Input placeholder="E-mail" name="email" type="email" />
          </div>
        </div>
      </form>
      <div className="mt-10">
        <Header>Mi contacto:</Header>
        <div className="w-max rounded-3xl shadow-md">
          <table className="border-separate border-spacing-x-8 border-spacing-y-4">
            <tr>
              <td>E-mail</td>
              <td className="fontSemiBold text-right">Esther@gmail.com</td>
            </tr>
            <tr className="">
              <td>Numero de telefono:</td>
              <td className="fontSemiBold text-right">+ 00000000000</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;

type THeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<THeaderProps> = ({ children }) => {
  return <h4 className="mb-8">{children}</h4>;
};
