import type { Service } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ServiceTile from "~/components/ServiceTile";
import { SLIDER_BREAK_POINTS } from "./ServicesModule";

const copy = { button: "Edit" };

type ServiceAdminModulePropsType = {
  services: Array<Service & { photos: Array<string> }>;
};

const ServiceAdminModule: React.FC<ServiceAdminModulePropsType> = ({
  services,
}) => {
  return (
    <div data-test-id="service_admin_module">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={SLIDER_BREAK_POINTS}
        pagination={{ clickable: true }}
        className="pb-[50px]"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} className="h-auto">
            <a className="h-full" href={`/admin/services/${service.id}`}>
              <ServiceTile {...service} copy={copy} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceAdminModule;
