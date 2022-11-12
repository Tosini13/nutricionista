import Button from "~/components/form/Button";
import nutritionist from "../../../../public/images/mejora_composicion.png";
import badge from "../../../../public/images/opcion_vegana.png";

import Paragraph from "../Paragraph";

type TVegetarianAndVeganProps = {};

const VegetarianAndVegan: React.FC<TVegetarianAndVeganProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative flex">
        <div>
          <img src={nutritionist} alt="fruits vegetables nutritionist diet" />
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
          Si sigues una dieta basada en vegetales o quieres empezarla, puedo
          ayudarte a plantearla de una manera óptima. Tanto en la confección de
          tus menús como en la toma de suplementos convenientes. En pocas
          visitas obtendrás herramientas y recetas muy útiles para tu estilo de
          vida.
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

export default VegetarianAndVegan;
