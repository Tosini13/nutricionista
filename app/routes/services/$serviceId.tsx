import { useParams } from "@remix-run/react";
import Section from "~/components/sections/Section";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";
import ServiceModule from "~/modules/ServiceModule";

type ServicePagePropsType = {};

const ServicePage: React.FC<ServicePagePropsType> = ({}) => {
  const { serviceId } = useParams();
  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <Section>
          <ServiceModule id={serviceId} />
        </Section>
      </main>
      <FooterModule />
    </>
  );
};

export default ServicePage;
