import Button from "../form/Button";
import ImgWatermelon from "../../../public/images/woman_watermelon.png";
import Section from "./Section";
import SocialBar from "../SocialBar";

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
    <Section id="home" className="relative py-10 lg:mx-0 lg:pt-24 xl:mx-20">
      <div className="relative z-[2] pb-20">
        <h1 className="title pb-8 pt-6 text-left text-3xl font-bold sm:text-6xl md:text-center">
          ¿Quieres empezar
          <br /> a cuidar de tu <span className="text-main">salud</span>?
        </h1>
        <div className="insetShadow relative z-[1] float-right block max-w-[50%] translate-x-1/3 lg:hidden">
          <img src={ImgWatermelon} alt="watermelon" />
        </div>
        <p className="pb-10 pb-8 text-left text-xl lg:text-center">
          Puedo ayudarte a mejorar tu salud y a sentirte mejor
          <br className="hidden md:inline" /> gracias al cambio de hábitos en tu
          alimentación
        </p>
        <Button
          className={"mx-auto w-full font-semibold sm:w-fit"}
          style={style.button}
          href="#contact"
        >
          Pide Cita
        </Button>
        {/**
         * @todo implement when img is ready
         */
        /* <img src={ImgFruits} alt="fruits" style={style.leftImage} /> */}
      </div>
      <div className="insetShadow absolute right-0 bottom-0 z-[1] hidden lg:block">
        <img src={ImgWatermelon} alt="watermelon" />
      </div>
      <div className="block sm:hidden">
        <div className="h-px w-full bg-gradient-to-r from-gray-light-opacity0 via-gray-light to-gray-light-opacity0" />
        <div className="my-4 flex items-center justify-evenly">
          <SocialBar mode="dark" />
        </div>
        <div className="h-px w-full bg-gradient-to-r from-gray-light-opacity0 via-gray-light to-gray-light-opacity0" />
      </div>
    </Section>
  );
};

export default Home;
