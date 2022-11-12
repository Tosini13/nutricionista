import pregnancy from "../../../../public/images/pregnancy.png";
import badge from "../../../../public/images/opcion_vegana.png";
import Button from "~/components/form/Button";
import Paragraph from "../Paragraph";

type TPregnancyAndLactationProps = {};

const PregnancyAndLactation: React.FC<TPregnancyAndLactationProps> = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="relative flex">
        <div>
          <img src={pregnancy} alt="pregnancy diet" />
        </div>
        <div className="block md:hidden">
          <img
            src={badge}
            alt="fruits vegetables nutritionist diet"
            className="h-fit"
          />
        </div>
      </div>
      <div>
        <Paragraph>
          Si quieres estar segura de tener una nutrición óptima en estas etapas
          de la vida, puedo ayudarte. También en diabetes gestacional,
          preeclampsia e infertilidad
        </Paragraph>
        <div className="mt-8 flex items-end justify-between md:mt-0">
          <Button
            className="min-w-full sm:mx-auto sm:min-w-0 md:mx-0"
            href="#contact"
          >
            pide cita
          </Button>
          <img
            src={badge}
            alt="fruits vegetables nutritionist diet"
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PregnancyAndLactation;
