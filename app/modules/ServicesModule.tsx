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
import Button from "~/components/form/Button";
import Service from "~/components/Service";

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
  photoUrl: string;
  title: string;
  description: string;
};

export const SERVICES: Array<ServiceType> = [
  {
    id: "1",
    photoUrl: photo1,
    title: "Mejora de la composición corporal",
    description:
      "Pérdida o aumento de peso. Aprende a comer y a disfrutar de la comida sin poner en riesgo tu salud. Te acompaño, te asesoro y te motivo en el proceso para que puedas cumplir tu objetivo de una manera fácil y agradable. Sin efectos rebotes, aprenderás para toda la vida.",
  },
  {
    id: "2",
    photoUrl: photo2,
    title: "Dietoterapia",
    description:
      "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
  },
  {
    id: "3",
    photoUrl: photo3,
    title: "Embarazo y lactacia",
    description:
      "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
  },
  {
    id: "4",
    photoUrl: photo4,
    title: "Alimentación vegetariana y vegana",
    description:
      "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
  },
];

type ServicesModulePropsType = {};

const ServicesModule: React.FC<ServicesModulePropsType> = ({}) => {
  const [serviceId, setServiceId] = React.useState<string | null>(null);

  const service = React.useMemo(
    () => SERVICES.find((s) => s.id === serviceId),
    [serviceId]
  );
  return (
    <>
      <Section
        data-test-id="services_module"
        id="servicios"
        className="space-y-12"
      >
        {service ? (
          <>
            <div className="block md:hidden">
              <SectionTitle className="text-center">
                Mí <span className="text-secondary">servicios</span>
              </SectionTitle>
              <Paragraph className="mx-auto max-w-[700px] text-center">
                Después de la primera visita en el plazo de 1 a 3 días
                laborables recibirás tu plan nutricional, recetas, y toda la
                información que considere importante para tu caso.
              </Paragraph>
            </div>
            <Service
              {...service}
              handleClickGoBack={() => setServiceId(null)}
            />
          </>
        ) : (
          <>
            <div>
              <SectionTitle className="text-center">
                Mí <span className="text-secondary">servicios</span>
              </SectionTitle>
              <Paragraph className="mx-auto max-w-[700px] text-center">
                Después de la primera visita en el plazo de 1 a 3 días
                laborables recibirás tu plan nutricional, recetas, y toda la
                información que considere importante para tu caso.
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
                <SwiperSlide key={service.id} className="h-auto">
                  <div
                    className="h-full"
                    onClick={() => setServiceId(service.id)}
                  >
                    <ServiceTile {...service} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              bigger
              alternative
              className="mx-auto w-fit"
              href="#contact"
            >
              Pedir Cita
            </Button>
          </>
        )}
      </Section>
      {/* <div className="fixed top-0 left-0 z-40 h-screen w-screen bg-white px-2 pt-[99px]">
        <Service {...SERVICES[0]} />
      </div> */}
    </>
  );
};

export default ServicesModule;
