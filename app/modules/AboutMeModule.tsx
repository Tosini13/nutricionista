import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import esther from "../../public/img/photos/esther.png";
import universityIcon from "../../public/img/icons/university.icon.svg";
import orderIcon from "../../public/img/icons/order.icon.svg";
import laboratoryIcon from "../../public/img/icons/laboratory.icon.svg";
import healthIcon from "../../public/img/icons/health.icon.svg";
import AboutMeParagraph from "~/components/AboutMeParagraph";
import Button from "~/components/form/Button";

export type MyInfo = {
  id: string;
  iconUrl: string;
  description: string;
};

const myInfos: Array<MyInfo> = [
  {
    id: "1",
    iconUrl: universityIcon,
    description:
      "Soy Esther Zamora, Dietista-nutricionista especializada en nutrición clínica, graduada por la Universidad de Valencia, aunque cursé un año de mis estudios en la Universidad de Milán, Italia (Università degli studi di Milano).",
  },
  {
    id: "2",
    iconUrl: laboratoryIcon,
    description:
      "Pienso que es muy importante individualizar cada caso para lograr el éxito en el tratamiento así como colaborar con otros profesionales de la salud si fuera necesario como: psicólogos, fisioterapeutas, médicos, entrenadores personales, etc.",
  },
  {
    id: "3",
    iconUrl: healthIcon,
    description:
      "He realizado numerosos cursos formativos enfocados en nutrición clínica para el manejo de las enfermedades con la alimentación. He trabajado en varias clínicas de nutrición abordando distintos objetivos, que me han brindado el conocimiento y la experiencia para poder ayudarte a lograr tus metas desde un enfoque científico, eficaz y seguro.",
  },
  {
    id: "4",
    iconUrl: orderIcon,
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
      className="max-w-none space-y-10 bg-primary-light px-4 pt-0"
    >
      <div className="mx-auto max-w-screen-xl">
        <SectionTitle className="text-left">
          Sobre <span className="text-secondary">mí</span>
        </SectionTitle>
        <div className="flex">
          <div className="grid grid-cols-2 gap-x-14">
            <div className="space-y-6">
              {leftHalf.map((myInfo) => (
                <AboutMeParagraph key={myInfo.id} {...myInfo} />
              ))}
            </div>
            <div className="space-y-6">
              {rightHalf.map((myInfo) => (
                <AboutMeParagraph key={myInfo.id} {...myInfo} />
              ))}
            </div>
          </div>
          <div className="relative order-1 h-fit min-w-[30%] md:order-3">
            <img width={"100%"} src={esther} alt="Nutricionista Esther" />
          </div>
        </div>
        <Button secondary className={"mx-auto w-full sm:w-fit"} href="#contact">
          Pide Cita
        </Button>
      </div>
    </Section>
  );
};

export default AboutMeModule;
