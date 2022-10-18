import pregnancy from "../../../../public/images/pregnancy.png";
import badge from "../../../../public/images/opcion_vegana.png";
import Button from "~/components/form/Button";

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
        <h4 className="mb-2 w-fit whitespace-nowrap border-b-2 text-xl font-bold">
          Nutricion óptima
        </h4>
        <ul className="pb-10 pb-8 text-lg font-light leading-10 tracking-wide">
          <li>Patologías renales</li>
          <li>Patologías metabólicas: diabetes, colesterol, hipertensión</li>
          <li>Alergias e intolerancias</li>
          <li>Hipotiroidismo</li>
          <li>Migrañas</li>
        </ul>
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
