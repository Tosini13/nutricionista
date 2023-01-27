import { ServiceType } from "~/modules/ServicesModule";
import Button from "./form/Button";
import ButtonIcon from "./form/ButtonIcon";
import Paragraph from "./sections/Paragraph";
import { ArrayLeft } from "./icons";
import React from "react";

const resolution = ["480w", "800w"];

type ServicePropsType = ServiceType & {
  handleClickGoBack?: () => void;
  goBackHref?: string;
};

const Service: React.FC<ServicePropsType> = ({
  title,
  photos,
  description,
  handleClickGoBack,
  goBackHref,
}) => {
  const srcSet = React.useMemo(
    () =>
      photos.map((photo, index) => `${photo} ${resolution[index]}`).join(","),
    []
  );
  return (
    <div data-test-id="service">
      <div className="flex justify-between">
        <div className="space-y-7 md:max-w-[600px]">
          <div className="md:mb-14">
            <ButtonIcon
              icon={<ArrayLeft />}
              href={goBackHref}
              onClick={handleClickGoBack}
            />
          </div>
          <h2 className="mx-auto max-w-[350px] text-center text-3xl font-extrabold leading-10 md:mx-0 md:text-left">
            {title}
          </h2>
          <Paragraph className="text-center md:text-left">
            {description}
          </Paragraph>
          <Button className="mx-auto w-full sm:w-fit md:mx-0">Pide Cita</Button>
        </div>
        <div className="hidden min-w-[40%] md:block">
          <img
            className="mx-auto"
            srcSet={srcSet}
            sizes="(max-width: 600px) 480px, 800px"
            src={photos[0]}
            alt={"service photo"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
