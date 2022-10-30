import wavingHand from "../../../public/images/wavingHand.svg";
import esther from "../../../public/images/esther_image.png";
import React from "react";
import SectionTitle from "./SectionTitle";
import Paragraph from "./Paragraph";
import Section from "./Section";
import { twMerge } from "tailwind-merge";

const style = {
  holaContainer: {
    background:
      "linear-gradient(96.93deg, rgba(254, 254, 254, 0.82) 0%, rgba(255, 255, 255, 0.09) 43.77%, rgba(255, 255, 255, 0.53) 100%)",
    boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(20px)",
  },
  leerMasButton: {
    position: "absolute",
    bottom: "10px",
    zIndex: 2,
    left: "50%",
    transform: "translateX(-50%)",
  } as React.ButtonHTMLAttributes<HTMLButtonElement>["style"],
};

const paragraphClassNames = {
  base: "bottomInsetShadow overflow-hidden transition-[max-height] text-gray leading-[3.5rem]",
  readAll: "uncovered  duration-300 max-h-[500vh]",
  unReadAll: "duration-0 max-h-[30em] md:max-h-[30em]",
};

type TSobreMiProps = {};

const SobreMi: React.FC<TSobreMiProps> = () => {
  const [readAll, setReadAll] = React.useState(false);

  const handleReadMore = React.useCallback(() => setReadAll((v) => !v), []);

  const paragraphClassName = React.useMemo(() => {
    if (!readAll) {
      return twMerge(paragraphClassNames.base, paragraphClassNames.unReadAll);
    }
    return twMerge(paragraphClassNames.base, paragraphClassNames.readAll);
  }, [readAll]);

  return (
    <Section id="sobreMi">
      <div className="grid grid-cols-12 gap-4">
        <div className="order-2 col-span-12 md:order-1 md:col-span-7">
          <SectionTitle className="text-left text-left">Sobre mi</SectionTitle>
          <div data-testid="sobremi_description">
            <Paragraph className={paragraphClassName}>
              <span className="font-semibold">Dietista-Nutricionista</span>{" "}
              especializada en nutrición clínica y graduada por la Universidad
              de Valencia. Cursé un año de mis estudios en la universidad de
              Milán, Italia (Università degli studi di Milano) donde tuve la
              oportunidad de recibir formación en materias de gran interés,
              particularmente los aspectos celulares y moleculares de la
              nutrición. Posteriormente realicé las prácticas en el servicio de
              endocrinología del hospital de Denia. Cuando terminé la
              universidad empecé a interesarme por la nutrición clínica y el
              tratamiento nutricional en las distintas patologías así como su
              prevención. Desde entonces he estado realizando varios cursos
              formativos en este campo y he trabajado en clínicas de nutrición
              abordando distintos objetivos. Para mí es importante el abordaje
              desde un punto de vista holístico y tener en cuenta todos los
              ámbitos de la vida de una persona para poder mejorar su salud, y
              estar en contacto con otros profesionales de la salud si fuera
              necesario un tratamiento multidisciplinar: psicólogos,
              entrenadores personales, médicos, etc. También creo que es
              necesario ir adquiriendo cambios de una manera paulatina, con
              objetivos reales y que se disfrute del proceso para poder
              seguirlos a largo plazo. Tengo un especial interés en la cocina,
              la gastronomía y el estilo de vida saludable. Me gusta seguir
              formándome cada día para estar actualizada.
            </Paragraph>
            <div className="mt-5 flex justify-center">
              <button
                className="link text-lg font-bold"
                onClick={handleReadMore}
              >
                {readAll ? "Leer menos" : "Leer mas"}
              </button>
            </div>
          </div>
        </div>
        <div
          data-testid="sobremi_images"
          className="order-1 col-span-12 md:order-2 md:col-span-5 md:mt-20"
        >
          <div
            className="mx-auto flex w-fit items-center rounded-3xl py-4 px-6 text-lg drop-shadow-[0px_5px_20px_0px_rgba(0,0,0,0.05)] md:ml-0"
            style={style.holaContainer}
          >
            <p className="font-semibold">¡Hola! Soy Esther Zamora.</p>
            <img className="pl-4" src={wavingHand} alt="Hola" />
          </div>
          <img className="pl-4" src={esther} alt="Nutricionista Esther" />
        </div>
      </div>
      <div>
        <div className="my-10 h-px w-full bg-gradient-to-r from-gray-light-opacity0 via-gray-light to-gray-light-opacity0 " />
        <div className="my-2 grid grid-cols-12 gap-4 text-center text-lg lg:my-4 lg:text-lg xl:text-xl">
          <p className="col-span-12 w-full text-gray-light lg:col-span-6">
            Farmacéutica colegiada nº 18858
          </p>
          <p className="col-span-12 w-full text-gray-light lg:col-span-6 ">
            Nutricionista colegiada nº CAT 001827
          </p>
        </div>
        <div className="my-10 h-px w-full bg-gradient-to-r from-gray-light-opacity0 via-gray-very-light to-gray-light-opacity0 " />
      </div>
    </Section>
  );
};

export default SobreMi;
