import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import esther from "../../public/img/photos/esther_web_bg.png";
import estherWebP from "../../public/img/photos/esther_web_bg.webp";
import AboutMeParagraph from "~/components/AboutMeParagraph";
import { ButtonLink } from "~/components/form/Button";
import Img from "~/components/Img";
import {
  HealthIcon,
  LaboratoryIcon,
  OrderIcon,
  UniversityIcon,
} from "~/components/icons";

export type MyInfo = {
  id: string;
  icon: React.ReactNode;
  description: string;
};

const myInfos: Array<MyInfo> = [
  {
    id: "1",
    icon: <UniversityIcon className="text-transparent" />,
    description:
      "Soy Esther Zamora, Dietista-nutricionista especializada en nutrición clínica, graduada por la Universidad de Valencia, aunque cursé un año de mis estudios en la Universidad de Milán, Italia (Università degli studi di Milano).",
  },
  {
    id: "2",
    icon: <LaboratoryIcon className="text-transparent" />,
    description:
      "Pienso que es muy importante individualizar cada caso para lograr el éxito en el tratamiento así como colaborar con otros profesionales de la salud si fuera necesario como: psicólogos, fisioterapeutas, médicos, entrenadores personales, etc.",
  },
  {
    id: "3",
    icon: <HealthIcon className="text-transparent" />,
    description:
      "He realizado numerosos cursos formativos enfocados en nutrición clínica para el manejo de las enfermedades con la alimentación. He trabajado en varias clínicas de nutrición abordando distintos objetivos, que me han brindado el conocimiento y la experiencia para poder ayudarte a lograr tus metas desde un enfoque científico, eficaz y seguro.",
  },
  {
    id: "4",
    icon: <OrderIcon className="text-transparent" />,
    description:
      "Estoy colegiada por el CODINUCOVA (Colegio de Dietistas-Nutricionistas de la Comunidad Valenciana). Nº: CV01045",
  },
];

const leftHalf = myInfos.slice(0, myInfos.length / 2);
const rightHalf = myInfos.slice(myInfos.length / 2);

type AboutMeModulePropsType = {};

const AboutMeModule: React.FC<AboutMeModulePropsType> = ({}) => {
  return (
    <Section
      data-test-id="about_me_module"
      id="sobreMi"
      className="mx-0 max-w-none space-y-10 bg-primary-light px-4"
    >
      <div className="mx-2 max-w-screen-xl space-y-12 md:mx-auto">
        <SectionTitle className="text-left">
          Sobre <span className="text-secondary">mí</span>
        </SectionTitle>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="order-2 grid grid-cols-1 space-y-8 md:max-w-[60%] md:grid-cols-2 md:gap-x-14 md:space-y-0">
            <div className="space-y-8">
              {leftHalf.map((myInfo) => (
                <AboutMeParagraph key={myInfo.id} {...myInfo} />
              ))}
            </div>
            <div className="space-y-8">
              {rightHalf.map((myInfo) => (
                <AboutMeParagraph key={myInfo.id} {...myInfo} />
              ))}
            </div>
          </div>
          <div className="relative order-1 mb-10 h-fit translate-x-[10%] md:order-3 md:mb-0 md:min-w-[30%] md:max-w-[30%] md:translate-x-0">
            <Img
              width="100%"
              height="100%"
              src={esther}
              webPsrc={estherWebP}
              alt="Nutricionista Esther"
            />
          </div>
        </div>
        <ButtonLink
          secondary
          className={"mx-auto w-full sm:w-fit"}
          href="#contact"
        >
          Pide Cita
        </ButtonLink>
      </div>
    </Section>
  );
};

export default AboutMeModule;
