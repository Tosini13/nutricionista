import Button from "../form/Button";
import ImgWatermelon from "../../../public/images/woman_watermelon_bg_white.png";
import Section from "./Section";

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
    right: "0em",
  } as React.ImgHTMLAttributes<HTMLImageElement>["style"],
};

type THomeProps = {};

const Home: React.FC<THomeProps> = () => {
  return (
    <Section id="home" className="py-10 lg:pt-24">
      <div className="flex flex-col items-center pb-20 md:text-center">
        <h1 className="title pb-8 pt-6 text-3xl font-bold sm:text-6xl ">
          ¿Quieres empezar
          <br /> a cuidar de tu <span className="mainColor">salud</span>?
        </h1>
        <p className="pb-10 pb-8 text-xl">
          Puedo ayudarte a mejorar tu salud y a sentirte mejor
          <br className="hidden md:inline" /> gracias al cambio de hábitos en tu
          alimentación
        </p>
        <Button className={"fontSemiBold w-full sm:w-fit"} style={style.button}>
          Pide Cita
        </Button>
        {/**
         * @todo implement when img is ready
         */
        /* <img src={ImgFruits} alt="fruits" style={style.leftImage} /> */}
      </div>
      {/* <img
        className="absolute right-0 bottom-0"
        src={ImgWatermelon}
        alt="watermelon"
      /> */}
    </Section>
  );
};

export default Home;
