import wavingHand from "../../../public/images/wavingHand.svg";
import esther from "../../../public/images/esther_image.png";
import React from "react";

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

type TSobreMiProps = {};

const SobreMi: React.FC<TSobreMiProps> = () => {
  const [readAll, setReadAll] = React.useState(false);

  const handleReadMore = React.useCallback(() => setReadAll(true), []);

  return (
    <section id="#sobreMi">
      <div className="mx-20 flex flex-col">
        <h2
          className="title fontSemiBold pb-8 text-4xl font-bold"
          data-testid="sobremi_title"
        >
          Sobre mi
        </h2>
        <div className="grid grid-cols-12 gap-4">
          <div data-testid="sobremi_description" className="col-span-7">
            <div
              className={
                readAll ? "bottomInsetShadow uncovered" : "bottomInsetShadow"
              }
            >
              <p className="fontLight pb-10 pb-8 text-lg leading-10 tracking-wide">
                <span className="fontSemiBold">Dietista-Nutricionista</span>{" "}
                especializada en nutrición clínica y graduada por la Universidad
                de Valencia. Cursé un año de mis estudios en la universidad de
                Milán, Italia (Università degli studi di Milano) donde tuve la
                oportunidad de recibir formación en materias de gran interés,
                particularmente los aspectos celulares y moleculares de la
                nutrición. Posteriormente realicé las prácticas en el servicio
                de endocrinología del hospital de Denia. Cuando terminé la
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
              </p>
              {readAll ? null : (
                <button
                  className="link"
                  style={style.leerMasButton}
                  onClick={handleReadMore}
                >
                  Leer mas
                </button>
              )}
            </div>
          </div>
          <div data-testid="sobremi_images" className="col-span-5">
            <div
              className="flex w-fit items-center rounded-3xl border border-gray-200 py-4 px-6 text-lg"
              style={style.holaContainer}
            >
              <p className="fontSemiBold">¡Hola! Soy Esther Zamora.</p>
              <img className="pl-4" src={wavingHand} alt="Hola" />
            </div>
            <img className="pl-4" src={esther} alt="Nutricionista Esther" />
          </div>
        </div>
        <div className="my-10 grid grid-cols-12 border-y-2 p-10 text-xl text-gray-400">
          <p className="col-start-2 col-end-6">
            Farmacéutica colegiada nº 18858
          </p>
          <p className="col-start-7 col-end-12">
            Nutricionista colegiada nº CAT 001827
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
