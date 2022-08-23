import diet from "../../../../public/images/diet.png";
import badge from "../../../../public/images/opcion_vegana.png";
import Button from "~/components/form/Button";
import Paragraph from "../Paragraph";

type TDietTherapyProps = {};

const DietTherapy: React.FC<TDietTherapyProps> = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 mx-auto flex md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-1 xl:col-span-5">
        <div>
          <img src={diet} alt="man and woman having diet" />
        </div>
        <div className="block md:hidden">
          <img
            src={badge}
            alt="fruits vegetables nutritionist diet"
            className="h-fit"
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 xl:col-span-7">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="mb-6 md:mr-6 md:mb-0">
            <h3 className="fontBold mb-4 text-xl">
              Tratamiento de tu patología a través de la alimentación.
            </h3>
            <Paragraph>
              Mejora de los síntomas como hinchazón, dolor abdominal, etc.
              Intervenciones y pautas nutricionales específicas para tu
              patología. Resolución de dudas en relación a tu patología.
            </Paragraph>
          </div>
          <div>
            <h4 className="fontBold mb-2 w-fit whitespace-nowrap border-b-2 text-xl">
              Patologías digestivas:
            </h4>
            <ul className="fontLight pb-10 pb-8 text-lg leading-10 tracking-wide">
              <li>Patologías renales</li>
              <li>
                Patologías metabólicas: diabetes, colesterol, hipertensión
              </li>
              <li>Alergias e intolerancias</li>
              <li>Hipotiroidismo</li>
              <li>Migrañas</li>
            </ul>
          </div>
        </div>
        <div className="flex items-end md:justify-evenly lg:justify-between">
          <Button className="min-w-full sm:mx-auto sm:min-w-0 md:mx-0">
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

export default DietTherapy;
