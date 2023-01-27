import React from "react";
import Service from "../components/Service";
import { SERVICES } from "./ServicesModule";

type ServiceModulePropsType = {
  id?: string;
};

const ServiceModule: React.FC<ServiceModulePropsType> = ({ id }) => {
  const service = React.useMemo(
    () => SERVICES.find((service) => service.id === id),
    [id]
  );

  const goBackHref = React.useMemo(() => `/?serviceId=${id}#servicios`, [id]);

  if (!service) {
    return null;
  }

  return (
    <div data-test-id="service_module">
      <Service {...service} goBackHref={goBackHref} />
    </div>
  );
};

export default ServiceModule;
