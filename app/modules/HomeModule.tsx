import Button from "~/components/form/Button";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import photoPersons from "../../public/img/photos/home_persons.png";
import secure_icon from "../../public/img/icons/secure.svg";
import howTo from "../../public/img/icons/how_to.svg";
import changeCircle from "../../public/img/icons/change_circle.svg";
import underline from "../../public/img/photos/underline.svg";
import Feature from "~/components/home/Feature";
import React from "react";

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
  const features = React.useMemo(
    () =>
      FEATURES.map((feature) => [
        <Feature key={feature.id} {...feature} />,
        <div
          key={`divider_${feature.id}`}
          className="mx-4 self-stretch border-r border-[#DDDDDD]"
        />,
      ])
        .flat()
        .slice(0, -1),
    []
  );

  return (
    <Section
      data-test-id="home_module"
      id="home"
      className="relative mx-0 max-w-none overflow-hidden pb-0 pt-16 md:pt-20"
    >
      <div className="mx-2 max-w-screen-xl space-y-16 overflow-visible md:mx-0 xl:mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="space-y-8">
            <h1 className="title text-3xl font-bold sm:text-6xl">
              ¿Quieres empezar a cuidar de tu{" "}
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
            <Paragraph>
              Puedo ayudarte a mejorar tu salud y a sentirte mejor gracias al
              cambio de hábitos en tu alimentación
            </Paragraph>
            <Button
              bigger
              className={"mx-auto w-full sm:w-fit md:ml-0"}
              href="#contact"
            >
              Pide Cita
            </Button>
          </div>
          <div className="relative order-1 h-fit self-end md:order-3 md:min-w-[50%]">
            <img width={"100%"} src={photoPersons} alt="photo persons" />
          </div>
        </div>
        <div className="relative mx-auto w-fit before:absolute before:left-1/2 before:bottom-0 before:h-1/4 before:w-screen before:-translate-x-1/2 before:bg-primary-light">
          <div
            className="relative mx-2 flex w-fit flex-col items-stretch justify-center divide-y
            divide-[#DDDDDD] rounded-xl bg-white px-8 shadow-[0px_4px_40px_rgba(0,_0,_0,_0.08)] md:grid-cols-3 md:grid-rows-1 md:flex-row md:items-center
            md:divide-y-0 md:divide-x md:px-0 md:py-8"
          >
            {FEATURES.map((feature) => (
              <div className="py-8 md:py-0 md:px-4 lg:px-8 xl:min-w-fit xl:lg:px-16">
                <Feature key={feature.id} {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeModule;
