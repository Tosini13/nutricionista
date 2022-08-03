import pregnancy from "../../../../public/images/pregnancy.png";
import badge from "../../../../public/images/opcion_vegana.png";
import Button from "~/components/form/Button";

type TPregnancyAndLactationProps = {};

const PregnancyAndLactation: React.FC<TPregnancyAndLactationProps> = () => {
  return (
    <div className="flex justify-between">
      <img src={pregnancy} alt="pregnancy diet" />
      <div>
        <h4 className="fontBold mb-2 w-fit whitespace-nowrap border-b-2 text-xl">
          Nutricion óptima
        </h4>
        <ul className="fontLight pb-10 pb-8 text-lg leading-10 tracking-wide">
          <li>Patologías renales</li>
          <li>Patologías metabólicas: diabetes, colesterol, hipertensión</li>
          <li>Alergias e intolerancias</li>
          <li>Hipotiroidismo</li>
          <li>Migrañas</li>
        </ul>
        <div className="flex items-end justify-between">
          <Button>pide cita</Button>
          <img src={badge} alt="fruits vegetables nutritionist diet" />
        </div>
      </div>
    </div>
  );
};

export default PregnancyAndLactation;
