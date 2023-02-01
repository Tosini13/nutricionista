import { Service as ServicePrismaType } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import React from "react";
import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import Service from "~/components/Service";
import { prisma } from "~/db.server";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";
import { IMG_PATH } from "~/utils/resources.server";

export type ServiceType = ServicePrismaType & { photos: Array<string> };

export const loader = async ({ params }: LoaderArgs) => {
  const services = await prisma.service.findMany();
  const photos = await prisma.photo.findMany();

  const servicesWithPhotos = services.map((service) => ({
    ...service,
    photos: photos
      .filter((photo) => photo.serviceId === service.id)
      .map((photo) => `${IMG_PATH}/${photo.filename}`),
  }));

  return json({
    service: servicesWithPhotos.find(
      (service) => service.id === params.serviceId
    ),
    services: servicesWithPhotos,
  });
};

type ServicePagePropsType = {};

const ServicePage: React.FC<ServicePagePropsType> = ({}) => {
  const { service, services } = useLoaderData<typeof loader>();

  const goBackHref = React.useMemo(
    () => `/?serviceId=${service?.id}#servicios`,
    [service?.id]
  );

  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <Section>
          {service ? (
            <Service {...service} goBackHref={goBackHref} />
          ) : (
            <Paragraph>There's no such service</Paragraph>
          )}
        </Section>
      </main>
      <FooterModule services={services} />
    </>
  );
};

export default ServicePage;
