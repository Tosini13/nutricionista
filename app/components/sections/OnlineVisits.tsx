import camera from "../../../public/images/onlineVisits/camera.png";
import checkList from "../../../public/images/onlineVisits/checkList.png";
import house from "../../../public/images/onlineVisits/house.png";
import search from "../../../public/images/onlineVisits/search.png";
import vector_large_width from "../../../public/images/onlineVisits/vector_large_width.png";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

type CardType = {
  id: string;
  icon: {
    url: string;
    alt: string;
  };
  content: React.ReactNode;
};

const cards: CardType[] = [
  {
    id: "cita previa",
    icon: {
      url: house,
      alt: "house",
    },
    content: (
      <>
        <a
          href="#contact"
          className="border-b border-current font-semibold text-main"
        >
          Pedir cita
        </a>{" "}
        escribiéndome un correo electrónico, puedes especificarme tu
        disponibilidad.
      </>
    ),
  },
  {
    id: "search",
    icon: {
      url: search,
      alt: "search",
    },
    content:
      "Te contestaré para formalizar la cita. Cuando ya tengas confirmada la cita, me enviarás toda la información que consideres relevante para tu caso y rellenarás los formularios que te envie.",
  },
  {
    id: "videocall",
    icon: {
      url: camera,
      alt: "camera",
    },
    content:
      "Haremos una videollamada mediante WhatsApp o Skype. Busca un lugar con buena conexión y piensa todo lo que me quieres preguntar en la consulta.",
  },

  {
    id: "visitas",
    icon: {
      url: checkList,
      alt: "checkList",
    },
    content:
      "Después de la primera visita en el plazo de 1 a 3 días laborables recibirás tu plan nutricional, recetas, y toda la información que considere importante para tu caso.",
  },
];

type TOnlineVisitsProps = {};

const OnlineVisits: React.FC<TOnlineVisitsProps> = () => {
  return (
    <Section
      className={`bg-contain bg-center bg-no-repeat lg:mx-0`}
      style={{
        backgroundImage: `url(${vector_large_width})`,
      }}
    >
      <div className="md:mx-20">
        <SectionTitle className="mb-20 text-center">
          ¿Como funcionan las visitas Online?
        </SectionTitle>
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="mx-auto flex max-w-sm flex-col items-center rounded-3xl bg-white px-8 py-10 shadow-xl"
            >
              <img
                src={card.icon.url}
                alt={card.icon.alt}
                className="mb-10 h-10"
              />
              <Paragraph className="text-left text-sm leading-6">
                {card.content}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OnlineVisits;
