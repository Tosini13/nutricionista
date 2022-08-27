import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import badge from "../../../public/images/opcion_vegana_icon.png";
import arrowRight from "../../../public/images/arrow_right_icon.svg";

import Button from "../form/Button";

type CardType = {
  id: string;
  title: string;
  vegetarian?: boolean;
  price: number;
  duration: string;
  visits: string;
  description?: string;
};

const cards: CardType[] = [
  {
    id: "1",
    title: "MEJORA DE LA COMPOSICIÓN CORPORAL",
    price: 99,
    duration: "3 MESES",
    visits: "1A VISITA + 2 SEGUIMIENTOS",
    description: "*sin patologías",
  },
  {
    id: "2",
    title: "Pack vegetarianos/veganos",
    vegetarian: true,
    price: 99,
    duration: "3 MESES",
    visits: "1A VISITA + 2 SEGUIMIENTOS",
    description:
      "Asesoramiento en nutrición vegetariana, suplementación, analíticas, aprender a planificar menús, etc.",
  },
  {
    id: "3",
    title: "Pack Dietoterapia",
    price: 120,
    duration: "3 MESES",
    visits: "1A VISITA + 2 SEGUIMIENTOS",
  },
];

type TPacksProps = {};

const Packs: React.FC<TPacksProps> = () => {
  return (
    <section id="#packs">
      <div className="md:mx-20">
        <SectionTitle className="text-center">Packs</SectionTitle>
        <Paragraph className="fontSemiBold mx-20 text-center leading-6 text-gray-400">
          Elige tu dieta favorita y contáctame. No hay oferta de descuento para
          “embarazo y lactancia”. Si quieres contactar en este caso te
          recomiendo visita normal.
        </Paragraph>
        <div className="mb-20 mt-8 grid grid-cols-1 gap-4 gap-x-12 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative grid auto-rows-fr gap-y-4 rounded-3xl bg-white px-4 shadow-xl"
            >
              {card.vegetarian && (
                <img
                  src={badge}
                  alt={"vegetarian badge"}
                  className="absolute top-4 right-4"
                />
              )}
              <h5 className="fontBold mt-16 text-center text-xl capitalize">
                {card.title}
              </h5>
              <div className="flex h-20 w-full items-center justify-center">
                <p className="mainColor fontBold mr-2 self-start text-5xl">
                  {card.price}€
                </p>
                <div className="h-full origin-center rotate-45 border-l-2 border-black" />
                <p className="fontSemiBold ml-2 self-end">{card.duration}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="fontSemiBold text-center">{card.visits}</p>
                <Paragraph className="mt-6 text-center text-sm leading-6">
                  {card.description}
                </Paragraph>
              </div>
              <div className="flex items-center justify-center">
                <Button className="rounded-full pr-4">
                  Pide Cita
                  <img src={arrowRight} alt="arrow right" className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packs;
