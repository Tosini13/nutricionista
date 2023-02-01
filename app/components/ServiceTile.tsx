import arrowRightIcon from "../../public/img/icons/arrow_right.svg";
import { ServiceType } from "~/modules/ServicesModule";
import { Button } from "./form/Button";

type ServiceTilePropsType = Omit<ServiceType, "description"> & {
  copy: {
    button: string;
  };
};

const ServiceTile: React.FC<ServiceTilePropsType> = ({
  photos,
  title,
  copy,
}) => {
  return (
    <div
      data-test-id="service_tile"
      className="align-center group mx-auto flex h-full max-w-[350px] cursor-pointer flex-col space-y-6 rounded-lg border border-[#DDDDDD] px-4 py-6 transition-all duration-300 hover-hover:hover:border-primary"
    >
      <img
        className="mx-auto"
        src={photos[0]}
        alt={`title photo`}
        width={200}
        height={200}
      />
      <div className="flex h-full flex-grow items-center justify-center text-center">
        <h4 className="h-fit text-center font-bold">{title}</h4>
      </div>
      <Button className="mx-auto w-fit bg-transparent text-primary hover-hover:hover:bg-transparent hover-hover:hover:text-primary hover-hover:hover:shadow-none">
        {copy.button}
        <img
          src={arrowRightIcon}
          alt="arrow right"
          className="ml-2 transition-all  duration-300 hover-hover:group-hover:ml-4"
        />
      </Button>
    </div>
  );
};

export default ServiceTile;
