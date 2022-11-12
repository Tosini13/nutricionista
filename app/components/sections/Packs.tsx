import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import badge from "../../../public/images/opcion_vegana_icon.png";
import arrowRight from "../../../public/images/arrow_right_icon.svg";

import Button from "../form/Button";
import Section from "./Section";

type CardType = {
  id: string;
  title: string;
  vegetarian?: boolean;
  price: number;
  offer?: number;
  duration: string;
  visits: string;
  description?: string;
};

const cards: CardType[] = [
  {
    id: "1",
    title: "MEJORA DE LA COMPOSICIÓN CORPORAL",
    price: 79,
    offer: 99,
    duration: "3 MESES",
    visits: "1A VISITA + 2 SEGUIMIENTOS",
    description: `*sin patologías`,
  },
  {
    id: "2",
    title: "Pack vegetarianos o veganos",
    vegetarian: true,
    price: 79,
    offer: 99,
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
    <Section id="packs" className="md:mx-20">
      <SectionTitle className="text-center">Packs</SectionTitle>
      <Paragraph className="text-center text-lg font-medium leading-9 text-gray">
        Elige el pack que más se adapte a ti con descuentos especiales
      </Paragraph>
      <div className="mb-20 mt-8 grid grid-cols-1 gap-4 gap-x-12 lg:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col rounded-3xl bg-white px-8 shadow-xl "
          >
            <div className="grid grow auto-rows-fr">
              {card.vegetarian && (
                <img
                  src={badge}
                  alt={"vegetarian badge"}
                  className="absolute top-4 right-4"
                />
              )}
              <div className="flex items-center justify-center">
                <h5 className="text-center text-lg font-bold uppercase text-[#465342]">
                  {card.title}
                </h5>
              </div>
              <div className="flex items-center justify-center border-y-2 border-gray-very-light py-8">
                <p className="relative mb-10 text-5xl font-bold text-main">
                  {card.price}€
                  {card.offer && (
                    <span className="absolute bottom-0 left-0 translate-y-[100%] text-2xl text-gray-light">
                      {card.offer}€
                      <div className="absolute top-1/2 left-1/2 w-full -translate-y-[50%] -translate-x-[50%] border-b-2 border-main-light" />
                    </span>
                  )}
                </p>
                <div className="h-full origin-center rotate-45 border-l-2 border-black" />
                <p className="mt-10 font-semibold">{card.duration}</p>
              </div>
            </div>
            <div className="flex h-full flex-col items-center justify-center py-10">
              <p className="text-center text-base font-semibold">
                {card.visits}
              </p>
              <Paragraph className="mt-6 text-left text-sm leading-6">
                {card.description}
              </Paragraph>
            </div>
            <div className="mb-10 flex items-center justify-center">
              <Button className="group rounded-full py-4 pr-4" href="#contact">
                Pide Cita
                <img
                  src={arrowRight}
                  alt="arrow right"
                  className="tranistion-all ml-2 duration-300 ease-out hover-hover:group-hover:ml-4"
                />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Packs;
