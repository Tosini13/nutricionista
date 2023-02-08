import { ButtonLink } from "~/components/form/Button";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import photoPersons from "../../public/img/photos/home_persons.png";
import secure_icon from "../../public/img/icons/secure.svg";
import howTo from "../../public/img/icons/how_to.svg";
import changeCircle from "../../public/img/icons/change_circle.svg";
import underline from "../../public/img/photos/underline.svg";
import Feature from "~/components/home/Feature";
import React from "react";
import { ArrowLeftIcon } from "~/components/icons";

export type FeatureType = {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
};

const FEATURES: Array<FeatureType> = [
  {
    id: "1",
    iconUrl: secure_icon,
    title: "Seguro",
    description: "y metodos personalizados",
  },
  {
    id: "2",
    iconUrl: howTo,
    title: "Holístico",
    description: "tratamiento de mis pacientes",
  },
  {
    id: "3",
    iconUrl: changeCircle,
    title: "Online",
    description: "y presencial en Valencia",
  },
];

type HomeModulePropsType = {};

const HomeModule: React.FC<HomeModulePropsType> = ({}) => {
  return (
    <Section
      data-test-id="home_module"
      id="home"
      className="relative mx-0 max-w-none overflow-hidden pb-0 md:-mt-16 md:pt-24"
    >
      <div className="mx-2 max-w-screen-xl space-y-16 overflow-visible xl:mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="space-y-8">
            <h1 className="title max-w-[600px] text-3xl font-bold sm:text-6xl">
              ¿Quieres empezar a cuidar de tu <br />
              <span className="relative text-secondary">
                salud
                <img
                  src={underline}
                  alt="underline"
                  className="absolute bottom-0 left-0 w-full"
                />
              </span>
              ?
            </h1>
            <Paragraph className="font-lg max-w-[450px]">
              Puedo ayudarte a mejorar tu salud y a sentirte mejor gracias al
              cambio de hábitos en tu alimentación
            </Paragraph>
            <ButtonLink
              bigger
              className={"group mx-auto w-full sm:w-fit md:ml-0"}
              href="#contact"
            >
              Pide Cita
              <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
            </ButtonLink>
          </div>
          <div className="relative order-1 h-fit self-end md:order-3 md:min-w-[60%]">
            <img width={"100%"} src={photoPersons} alt="photo persons" />
          </div>
        </div>
        <div className="relative mx-auto w-fit pb-10 before:absolute before:left-1/2 before:bottom-0 before:h-1/2 before:w-screen before:-translate-x-1/2 before:bg-primary-light">
          <div
            className="relative mx-2 flex w-fit flex-col items-stretch justify-center divide-y
            divide-[#DDDDDD] rounded-xl bg-white px-8 shadow-[0px_4px_40px_rgba(0,_0,_0,_0.08)] md:grid-cols-3 md:grid-rows-1 md:flex-row md:items-center
            md:divide-y-0 md:divide-x md:px-0 md:py-8"
          >
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="py-8 md:py-0 md:px-4 lg:px-8 xl:min-w-fit"
              >
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeModule;
