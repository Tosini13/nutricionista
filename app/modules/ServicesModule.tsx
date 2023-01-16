import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import Service from "~/components/Service";
import photo1 from "../../public/img/photos/healthy_man.png";
import photo2 from "../../public/img/photos/food_woman.png";
import photo3 from "../../public/img/photos/pregnant_woman.png";
import photo4 from "../../public/img/photos/smoothie_woman.png";
import Button from "~/components/form/Button";

export type ServiceType = {
  id: string;
  photoUrl: string;
  title: string;
};

const services: Array<ServiceType> = [
  {
    id: "1",
    photoUrl: photo1,
    title: "Mejora de la composición corporal",
  },
  {
    id: "2",
    photoUrl: photo2,
    title: "Dietoterapia",
  },
  {
    id: "3",
    photoUrl: photo3,
    title: "Embarazo y lactacia",
  },
  {
    id: "4",
    photoUrl: photo4,
    title: "Alimentación vegetariana y vegana",
  },
];

type ServicesModulePropsType = {};

const ServicesModule: React.FC<ServicesModulePropsType> = ({}) => {
  return (
    <Section
      data-test-id="services_module"
      id="servicios"
      className="space-y-8"
    >
      <SectionTitle>
        Mí <span className="text-secondary">servicios</span>
      </SectionTitle>
      <Paragraph>
        Después de la primera visita en el plazo de 1 a 3 días laborables
        recibirás tu plan nutricional, recetas, y toda la información que
        considere importante para tu caso.
      </Paragraph>
      <div className="flex justify-between">
        {services.map((service) => (
          <div className="max-w-[260px]">
            <Service key={service.id} {...service} />
          </div>
        ))}
      </div>
      <Button alternative className="mx-auto w-fit" href="#contact">
        Pedir Cita
      </Button>
    </Section>
  );
};

export default ServicesModule;
