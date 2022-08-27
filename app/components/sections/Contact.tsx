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
    <section id="#contact" className="min-h-[75vh] lg:mx-20">
      <SectionTitle className="text-center">Contacto</SectionTitle>
      <Paragraph className="text-md text-center">
        Si tienes alguna duda escríbeme y me
        <br />
        pondré en contacto contigo lo antes posible
      </Paragraph>
      <form>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-4">
          <div>
            <h4 className="mb-8 text-center sm:text-left">Mi mensaje:</h4>
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
          <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6">
            <h4 className="text-center sm:text-left">Tu contacto:</h4>
            <Input placeholder="Nombre" name="name" />
            <Input placeholder="Apellido" name="surname" />
            <Input placeholder="E-mail" name="email" type="email" />
          </div>
        </div>
      </form>
      <div className="mt-10">
        <h4 className="mb-8 text-center lg:text-left">Mi contacto:</h4>
        <div className="mx-auto w-max rounded-3xl shadow-md lg:mx-0 ">
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
