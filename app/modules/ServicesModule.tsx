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
import { ButtonLink } from "~/components/form/Button";
import { useLoaderData } from "@remix-run/react";
import { LoaderData, ServiceType } from "~/routes";

export const SLIDER_BREAK_POINTS = {
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

const copy = { button: "Leer mas" };

type ServicesModulePropsType = {
  services: Array<ServiceType>;
};

const ServicesModule: React.FC<ServicesModulePropsType> = ({ services }) => {
  const { serviceId } = useLoaderData() as LoaderData;

  const initialSlide = React.useMemo(() => {
    const index = services.findIndex((service) => service.id === serviceId);
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
          {services.map((service) => (
            <SwiperSlide key={service.id} className="h-auto">
              <a className="h-full" href={`/services/${service.id}`}>
                <ServiceTile {...service} copy={copy} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonLink
          bigger
          alternative
          className="mx-auto w-fit"
          href="#contact"
        >
          Pedir Cita
        </ButtonLink>
      </Section>
    </>
  );
};

export default ServicesModule;
