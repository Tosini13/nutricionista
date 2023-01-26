import { ServiceType } from "~/modules/ServicesModule";
import Button from "./form/Button";
import ButtonIcon from "./form/ButtonIcon";
import Paragraph from "./sections/Paragraph";
import arrowLeftIcon from "../../public/img/icons/arrow_left.svg";
import { ArrayLeft } from "./icons";

type ServicePropsType = ServiceType & {
  handleClickGoBack: () => void;
};

const Service: React.FC<ServicePropsType> = ({
  title,
  photoUrl,
  description,
  handleClickGoBack,
}) => {
  return (
    <div data-test-id="service">
      <div className="flex justify-between">
        <div className="space-y-7 md:max-w-[600px]">
          <div className="md:mb-14">
            <ButtonIcon icon={<ArrayLeft />} onClick={handleClickGoBack} />
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
            src={photoUrl}
            alt={"service photo"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
