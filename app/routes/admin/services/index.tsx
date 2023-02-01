import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import type { Service } from "@prisma/client";
import { IMG_PATH } from "~/utils/resources.server";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ServiceTile from "~/components/ServiceTile";
import { SLIDER_BREAK_POINTS } from "~/modules/ServicesModule";
import Section from "~/components/sections/Section";

export type LoaderData = {
  services: Awaited<Array<Service & { photos: Array<string> }>>;
};

export const loader: LoaderFunction = async () => {
  const services = await prisma.service.findMany();
  const photos = await prisma.photo.findMany();

  const servicesWithPhotos = services.map((service) => ({
    ...service,
    photos: photos
      .filter((photo) => photo.serviceId === service.id)
      .map((photo) => `${IMG_PATH}/${photo.filename}`),
  }));

  return json({
    services: servicesWithPhotos,
  });
};

const copy = { button: "Edit" };

type ServicesAdminPagePropsType = {};

const ServicesAdminPage: React.FC<ServicesAdminPagePropsType> = ({}) => {
  const data = useLoaderData<LoaderData>();

  return (
    <Section data-test-id="services_admin_page" first>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={SLIDER_BREAK_POINTS}
        pagination={{ clickable: true }}
        className="pb-[50px]"
      >
        {data.services.map((service) => (
          <SwiperSlide key={service.id} className="h-auto">
            <a className="h-full" href={`/admin/services/${service.id}`}>
              <ServiceTile {...service} copy={copy} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default ServicesAdminPage;
