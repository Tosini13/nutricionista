import { LinkButton } from "~/components/form/Button";
import nutritionist from "../../../../public/images/mejora_composicion.png";
import badge from "../../../../public/images/opcion_vegana.png";

import Paragraph from "../Paragraph";

type TBodyCompositionProps = {};

const BodyComposition: React.FC<TBodyCompositionProps> = () => {
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
        <h3 className="mb-4 text-xl font-bold">Perdida o aumento de peso.</h3>
        <Paragraph>
          Aprende a comer y a disfrutar de la comida sin poner en riesgo tu
          salud. Te acompaño, te asesoro y te motivo en el proceso para que
          puedas cumplir tu objetivo de una manera fácil y agradable. Sin
          efectos rebotes, aprenderás para toda la vida.
        </Paragraph>
        <div className="mt-8 flex items-end justify-between md:mt-0">
          <LinkButton
            className="min-w-full sm:mx-auto sm:min-w-0 md:mx-0"
            href="#contact"
          >
            pide cita
          </LinkButton>
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

export default BodyComposition;
