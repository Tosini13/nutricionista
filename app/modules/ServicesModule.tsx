import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import ServiceTile from "~/components/ServiceTile";
import photo1 from "../../public/img/photos/healthy_man.png";
import photo2 from "../../public/img/photos/food_woman.png";
import photo3 from "../../public/img/photos/pregnant_woman.png";
import photo4 from "../../public/img/photos/smoothie_woman.png";
import photo1large from "../../public/img/photos/healthy_man_large.png";
import photo2large from "../../public/img/photos/food_woman_large.png";
import photo3large from "../../public/img/photos/pregnant_woman_large.png";
import photo4large from "../../public/img/photos/smoothie_woman_large.png";
import Button from "~/components/form/Button";
import Service from "~/components/Service";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { LoaderData } from "~/routes";

const SLIDER_BREAK_POINTS = {
  1: {
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
  },
  350: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  580: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  840: {
    slidesPerView: 3,
    centeredSlides: false,
  },
  1100: {
    slidesPerView: 4,
    centeredSlides: false,
  },
};

export type ServiceType = {
  id: string;
  photos: Array<string>;
  title: string;
  description: string;
};

export const SERVICES: Array<ServiceType> = [
  {
    id: "1",
    photos: [photo1, photo1large],
    title: "Mejora de la composición corporal",
    description:
      "Pérdida o aumento de peso. Aprende a comer y a disfrutar de la comida sin poner en riesgo tu salud. Te acompaño, te asesoro y te motivo en el proceso para que puedas cumplir tu objetivo de una manera fácil y agradable. Sin efectos rebotes, aprenderás para toda la vida.",
  },
  {
    id: "2",
    photos: [photo2, photo2large],

    title: "Dietoterapia",
    description:
      "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
  },
  {
    id: "3",
    photos: [photo3, photo3large],

    title: "Embarazo y lactacia",
    description:
      "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
  },
  {
    id: "4",
    photos: [photo4, photo4large],

    title: "Alimentación vegetariana y vegana",
    description:
      "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
  },
];

type ServicesModulePropsType = {};

const ServicesModule: React.FC<ServicesModulePropsType> = ({}) => {
  const { serviceId } = useLoaderData() as LoaderData;

  const initialSlide = React.useMemo(() => {
    const index = SERVICES.findIndex((service) => service.id === serviceId);
    return index < 0 ? 0 : index;
  }, [serviceId]);

  return (
    <>
      <Section
        data-test-id="services_module"
        id="servicios"
        className="space-y-12"
      >
        <div>
          <SectionTitle className="text-center">
            Mí <span className="text-secondary">servicios</span>
          </SectionTitle>
          <Paragraph className="mx-auto max-w-[700px] text-left sm:text-center">
            Después de la primera visita en el plazo de
            1&nbsp;a&nbsp;3&nbsp;días laborables recibirás tu plan nutricional,
            recetas, y toda la información que considere importante para tu
            caso.
          </Paragraph>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          breakpoints={SLIDER_BREAK_POINTS}
          pagination={{ clickable: true }}
          className="pb-[50px]"
          initialSlide={initialSlide}
        >
          {SERVICES.map((service) => (
            <SwiperSlide key={service.id} className="h-auto">
              <a className="h-full" href={`/services/${service.id}`}>
                <ServiceTile {...service} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button bigger alternative className="mx-auto w-fit" href="#contact">
          Pedir Cita
        </Button>
      </Section>
    </>
  );
};

export default ServicesModule;
