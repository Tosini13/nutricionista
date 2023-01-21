import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import Service from "~/components/Service";
import photo1 from "../../public/img/photos/healthy_man.png";
import photo2 from "../../public/img/photos/food_woman.png";
import photo3 from "../../public/img/photos/pregnant_woman.png";
import photo4 from "../../public/img/photos/smoothie_woman.png";
import Button from "~/components/form/Button";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ServiceType = {
  id: string;
  photoUrl: string;
  title: string;
};

export const services: Array<ServiceType> = [
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

const ITEM_WIDTH = 260;
const SPACE_BETWEEN_ITEMS_WIDTH = 10;
const SLIDE_WIDTH = ITEM_WIDTH + SPACE_BETWEEN_ITEMS_WIDTH;

type ServicesModulePropsType = {};

const ServicesModule: React.FC<ServicesModulePropsType> = ({}) => {
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const [service, setService] = React.useState(0);
  const [dots, setDots] = React.useState(0);

  const sliderTransform = React.useMemo(() => {
    if (dots === service) {
      const itemsLength = services.length * SLIDE_WIDTH;
      const containerLength = sliderContainerRef.current?.offsetWidth ?? 0;
      return `translateX(-${itemsLength - containerLength}px)`;
    }
    return `translateX(-${service * SLIDE_WIDTH}px)`;
  }, [service, dots]);

  const dotClassName = React.useCallback(
    (index: number) =>
      twMerge(
        "highlight-none mx-4 h-3 w-3 cursor-pointer rounded-full bg-primary-light hover-hover:hover:bg-secondary transition-bg duration-150",
        service === index ? "bg-primary" : ""
      ),
    [service]
  );

  React.useLayoutEffect(() => {
    const itemsLength = services.length * SLIDE_WIDTH;

    const handleResize = () => {
      const containerLength = sliderContainerRef.current?.offsetWidth;

      if (containerLength && containerLength < itemsLength) {
        const dotsQtt = Math.floor(
          (itemsLength - containerLength) / SLIDE_WIDTH + 1
        );
        setDots(dotsQtt);
      }
    };

    handleResize();

    if (typeof window === "undefined") {
      return;
    }

    window?.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section
      data-test-id="services_module"
      id="servicios"
      className="space-y-12"
    >
      <div>
        <SectionTitle>
          Mí <span className="text-secondary">servicios</span>
        </SectionTitle>
        <Paragraph>
          Después de la primera visita en el plazo de 1 a 3 días laborables
          recibirás tu plan nutricional, recetas, y toda la información que
          considere importante para tu caso.
        </Paragraph>
      </div>
      <div className="hidden justify-between lg:flex">
        {services.map((service) => (
          <div className="max-w-[260px]">
            <Service key={service.id} {...service} />
          </div>
        ))}
      </div>
      <div ref={sliderContainerRef} className="block space-y-6 lg:hidden">
        <div className="relative h-[450px]">
          <div
            className="absolute top-0 left-0 flex justify-between transition-transform duration-150 ease-out"
            style={{
              transform: sliderTransform,
            }}
          >
            {services.map((service) => (
              <div
                className="h-[450px] w-[260px]"
                style={{
                  marginRight: `${SPACE_BETWEEN_ITEMS_WIDTH}px`,
                }}
              >
                <Service key={service.id} {...service} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          {services.slice(0, dots + 1).map((service, index) => (
            <div
              key={service.id}
              onClick={() => setService(index)}
              className={dotClassName(index)}
            />
          ))}
        </div>
      </div>
      <Button alternative className="mx-auto w-fit px-10 py-5" href="#contact">
        Pedir Cita
      </Button>
    </Section>
  );
};

export default ServicesModule;
