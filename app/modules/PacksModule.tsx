import React from "react";
import Carousel from "react-elastic-carousel";
import Pack, { PackIndividual } from "~/components/packs/Pack";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";

const CAROUSEL_BREAK_POINTS = [
  { width: 1, itemsToShow: 1 },
  { width: 640, itemsToShow: 2 },
  { width: 990, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

type VisitType = {
  id: string;
  title: string;
  price: number;
  offer?: number;
};

export type CardIndividualType = {
  id: string;
  title: string;
  visits: Array<VisitType>;
  recommended?: boolean;
};

const individualCard: CardIndividualType = {
  id: "4",
  title: "Visistas individuales",
  visits: [
    {
      id: "1",
      price: 30,
      title: "Sin patologias",
    },
    {
      id: "2",
      price: 40,
      title: "Dieoterapia",
    },
  ],
};

export type CardType = {
  id: string;
  title: string;
  price: number;
  offer?: number;
  features: Array<{
    id: string;
    title: string;
  }>;
  recommended?: boolean;
};

const CARDS: Array<CardType> = [
  {
    id: "3",
    title: "Pack dietoterapia",
    price: 99,
    offer: 120,
    features: [
      { id: "1", title: "3 meses" },
      { id: "2", title: "1a visita" },
      { id: "3", title: "2 seguimientos" },
    ],
    recommended: true,
  },
  {
    id: "1",
    title: "Mejora de la composición corporal",
    price: 75,
    offer: 99,
    features: [
      { id: "1", title: "3 meses" },
      { id: "2", title: "1a visita" },
      { id: "3", title: "2 seguimientos" },
      { id: "4", title: "Pérdida de peso" },
      { id: "5", title: "Aumento masa muscular" },
    ],
  },
  {
    id: "2",
    title: "Pack vegetarianos o veganos",
    price: 75,
    offer: 99,
    features: [
      { id: "1", title: "3 meses" },
      { id: "2", title: "1a visita" },
      { id: "3", title: "2 seguimientos" },
      { id: "4", title: "Asesoramiento en nutrición vegetariana" },
      { id: "5", title: "Suplementación" },
      { id: "6", title: "Analíticas" },
      { id: "7", title: "Aprender a planificar menús" },
    ],
  },
];

type PacksModulePropsType = {};

const PacksModule: React.FC<PacksModulePropsType> = ({}) => {
  const sliderItems = React.useMemo(
    () => [
      <PackIndividual {...individualCard} />,
      ...CARDS.map((card) => <Pack {...card} />),
    ],
    []
  );

  return (
    <Section
      data-test-id="packs_module"
      id="packs"
      className="mx-0 max-w-none bg-primary-light px-4"
    >
      <div className="mx-0 max-w-screen-xl md:mx-auto">
        <SectionTitle className="text-center text-secondary">
          Packs
        </SectionTitle>
        <Paragraph className="mb-10 text-center text-lg font-medium leading-9 text-gray">
          Elige el pack que más se adapte a ti con descuentos especiales
        </Paragraph>
        <Carousel
          itemsToScroll={1}
          showArrows={false}
          initialActiveIndex={1}
          breakPoints={CAROUSEL_BREAK_POINTS}
        >
          <PackIndividual {...individualCard} />
          {CARDS.map((card) => (
            <Pack {...card} />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default PacksModule;
