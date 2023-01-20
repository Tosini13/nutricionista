import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";

type VisitStepType = {
  id: string;
  description: string;
};

const visitSteps: Array<VisitStepType> = [
  {
    id: "1",
    description:
      "Pedir cita escribiéndome un correo electrónico, puedes especificarme cuando te viene mejor. Las consultas serán desde casa.",
  },
  {
    id: "2",
    description:
      "Te contestaré para formalizar la cita. Cuando ya tengas confirmada la cita, me enviarás toda la información que consideres relevante para tu caso y rellenarás los formularios que te envíe.",
  },
  {
    id: "3",
    description:
      "Haremos una videollamada mediante WhatsApp o Skype. Busca un lugar con buena conexión y piensa todo lo que me quieres preguntar en la consulta.",
  },
  {
    id: "4",
    description:
      "Después de la primera visita en el plazo de 1 a 3 días laborables recibirás tu plan nutricional, recetas, y toda la información que considere importante para tu caso.",
  },
];

type VisitsModulePropsType = {};

const VisitsModule: React.FC<VisitsModulePropsType> = ({}) => {
  return (
    <Section
      data-testid="visits_module"
      className={`mx-0 max-w-none bg-gradient-to-b from-[#FFF] to-primary-light`}
    >
      <div className="mx-2 max-w-screen-lg lg:mx-auto">
        <SectionTitle className="mb-20 text-center">
          <span className="text-secondary">¿Como funcionan</span> las visitas
          Online?
        </SectionTitle>
        <ol className="grid list-inside list-[decimal-leading-zero] grid-cols-1 gap-y-10 pt-20 md:grid-cols-2 md:gap-x-10 xl:list-outside xl:gap-x-32">
          {visitSteps.map((step) => (
            <li
              className="marker:text-4xl marker:font-bold marker:text-primary md:odd:-mt-20"
              key={step.id}
            >
              <Paragraph className="md:ml-8">{step.description}</Paragraph>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default VisitsModule;
