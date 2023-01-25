import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import Service from "~/components/Service";
import photo1 from "../../public/img/photos/healthy_man.png";
import photo2 from "../../public/img/photos/food_woman.png";
import photo3 from "../../public/img/photos/pregnant_woman.png";
import photo4 from "../../public/img/photos/smoothie_woman.png";
import Button from "~/components/form/Button";

const SLIDER_BREAK_POINTS = {
  1: {
    slidesPerView: 1,
  },
  580: {
    slidesPerView: 2,
  },
  840: {
    slidesPerView: 3,
  },
  1100: {
    slidesPerView: 4,
  },
};

export type ServiceType = {
  id: string;
  photoUrl: string;
  title: string;
};

export const SERVICES: Array<ServiceType> = [
  {
    id: "1",
    photoUrl: photo1,
    title: "Mejora de la composición corporal",
  },
  {
    id: "2",
    photoUrl: photo2,
    title: "Dietoterapia",
  },
  {
    id: "3",
    photoUrl: photo3,
    title: "Embarazo y lactacia",
  },
  {
    id: "4",
    photoUrl: photo4,
    title: "Alimentación vegetariana y vegana",
  },
];

type ServicesModulePropsType = {};

const ServicesModule: React.FC<ServicesModulePropsType> = ({}) => {
  return (
    <Section
      data-test-id="services_module"
      id="servicios"
      className="space-y-12"
    >
      <div>
        <SectionTitle>
          Mí <span className="text-secondary">servicios</span>
        </SectionTitle>
        <Paragraph>
          Después de la primera visita en el plazo de 1 a 3 días laborables
          recibirás tu plan nutricional, recetas, y toda la información que
          considere importante para tu caso.
        </Paragraph>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={SLIDER_BREAK_POINTS}
        pagination={{ clickable: true }}
        className="pb-[50px]"
      >
        {SERVICES.map((service) => (
          <SwiperSlide className="h-auto">
            <Service key={service.id} {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button alternative className="mx-auto w-fit px-10 py-5" href="#contact">
        Pedir Cita
      </Button>
    </Section>
  );
};

export default ServicesModule;
