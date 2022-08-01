import Button from "../form/Button";
import ImgFruits from "../../../public/images/fruits.png";
import ImgWatermelon from "../../../public/images/woman_watermelon_bg_white.png";

const style = {
  button: {
    padding: "1.25rem 3.5rem",
    textTransform: "uppercase",
  } as React.ButtonHTMLAttributes<HTMLButtonElement>["style"],
  leftImage: {
    position: "absolute",
    left: "calc(0% - 120px)",
  } as React.ImgHTMLAttributes<HTMLImageElement>["style"],
  rightImage: {
    position: "absolute",
    right: "6em",
  } as React.ImgHTMLAttributes<HTMLImageElement>["style"],
};

type THomeProps = {};

const Home: React.FC<THomeProps> = () => {
  return (
    <section id="#home" className="relative mb-20 py-10 lg:pt-24">
      <div className="mx-20 mb-20 flex flex-col items-center pb-20 text-center">
        <h1 className="title pb-8 pt-6 text-6xl font-bold">
          ¿Quieres empezar
          <br /> a cuidar de tu <span className="mainColor">salud</span>?
        </h1>
        <p className="pb-10 pb-8 text-xl">
          Puedo ayudarte a mejorar tu salud y a sentirte mejor
          <br /> gracias al cambio de hábitos en tu alimentación
        </p>
        <Button className={"fontSemiBold"} style={style.button}>
          Pide Cita
        </Button>
        {/* <img src={ImgFruits} alt="fruits" style={style.leftImage} /> */}
        <img
          className="pt-20"
          src={ImgWatermelon}
          alt="watermelon"
          style={style.rightImage}
        />
      </div>
    </section>
  );
};

export default Home;
