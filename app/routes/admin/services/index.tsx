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
import esther from "../../../../public/img/photos/esther_image.png";
import React from "react";

export type LoaderData = {
  services: Awaited<Array<Service & { photos: Array<string> }>>;
  serviceId: string | null;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const services = await prisma.service.findMany();
  const photos = await prisma.photo.findMany();
  console.log("params !log!", params);
  const url = new URL(request.url);
  const serviceId = url.searchParams.get("serviceId");

  const servicesWithPhotos = services.map((service) => ({
    ...service,
    photos: photos
      .filter((photo) => photo.serviceId === service.id)
      .map((photo) => `${IMG_PATH}/${photo.filename}`),
  }));

  return json({
    services: servicesWithPhotos,
    serviceId,
  });
};

const copy = { button: "Edit" };
const copyCreate = { button: "Create" };

type ServicesAdminPagePropsType = {};

const ServicesAdminPage: React.FC<ServicesAdminPagePropsType> = ({}) => {
  const { serviceId, services } = useLoaderData<LoaderData>();

  const initialSlide = React.useMemo(() => {
    const index = services.findIndex((service) => service.id === serviceId);
    return index < 0 ? 0 : index;
  }, [serviceId]);

  return (
    <Section data-test-id="services_admin_page" first>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={SLIDER_BREAK_POINTS}
        pagination={{ clickable: true }}
        className="pb-[50px]"
        initialSlide={initialSlide}
      >
        <SwiperSlide className="h-auto">
          <a className="h-full" href={`/admin/services/create`}>
            <ServiceTile
              photos={[esther]}
              id={"create_new_service_id"}
              title={"Add new service"}
              copy={copyCreate}
            />
          </a>
        </SwiperSlide>
        {services.map((service) => (
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
