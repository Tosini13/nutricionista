import React from "react";
import Pack, { PackIndividual } from "~/components/packs/Pack";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const SLIDER_BREAK_POINTS = {
  1: {
    slidesPerView: 1.2,
    centeredSlides: true,
  },
  380: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  990: {
    slidesPerView: 3,
    centeredSlides: false,
  },
  1200: {
    slidesPerView: 4,
    centeredSlides: false,
  },
};

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
  duration?: string;
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
    duration: "3 meses",
    features: [
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
    duration: "3 meses",
    features: [
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
    duration: "3 meses",
    features: [
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
  return (
    <Section
      data-test-id="packs_module"
      id="packs"
      className="mx-0 max-w-none bg-primary-light"
    >
      <div className="mx-0 max-w-screen-xl md:mx-auto">
        <SectionTitle className="mb-6 text-center text-secondary">
          Packs
        </SectionTitle>
        <Paragraph className="mx-2 mb-9 text-left text-lg font-medium leading-9 text-gray sm:text-center">
          Elige el pack que más se adapte a ti con descuentos especiales
        </Paragraph>
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          breakpoints={SLIDER_BREAK_POINTS}
          pagination={{ clickable: true }}
          className="secondary pb-[50px]"
          initialSlide={1}
        >
          <SwiperSlide className="h-auto">
            <PackIndividual {...individualCard} />
          </SwiperSlide>
          {CARDS.map((card) => (
            <SwiperSlide key={card.id} className="h-auto">
              <Pack {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default PacksModule;
