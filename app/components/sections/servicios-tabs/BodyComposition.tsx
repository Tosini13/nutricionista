import Button from "~/components/form/Button";
import nutritionist from "../../../../public/images/mejora_composicion.png";
import badge from "../../../../public/images/opcion_vegana.png";

import Paragraph from "../Paragraph";

type TBodyCompositionProps = {};

const BodyComposition: React.FC<TBodyCompositionProps> = () => {
  return (
    <div className="flex justify-between">
      <img src={nutritionist} alt="fruits vegetables nutritionist diet" />
      <div>
        <Paragraph>
          Aprende a comer y a disfrutar de la comida sin poner en riesgo tu
          salud. Te acompaño, te asesoro y te motivo en el proceso para que
          puedas cumplir tu objetivo de una manera fácil y agradable. Sin
          efectos rebotes, aprenderás para toda la vida.
        </Paragraph>
        <div className="flex items-end justify-between">
          <Button>pide cita</Button>
          <img src={badge} alt="fruits vegetables nutritionist diet" />
        </div>
      </div>
    </div>
  );
};

export default BodyComposition;
