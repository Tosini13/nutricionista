import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import BodyComposition from "./servicios-tabs/BodyComposition";
import DietTherapy from "./servicios-tabs/DietTherapy";
import PregnancyAndLactation from "./servicios-tabs/PregnancyAndLactation";
import TabButton from "./servicios-tabs/TabButton";
import VegetarianAndVegan from "./servicios-tabs/VegetarianAndVegan";

type TServiciosProps = {};

const Servicios: React.FC<TServiciosProps> = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const content = React.useMemo(() => {
    switch (activeTab) {
      case 1:
        return <DietTherapy />;
      case 2:
        return <PregnancyAndLactation />;
      case 3:
        return <VegetarianAndVegan />;
      default:
        return <BodyComposition />;
    }
  }, [activeTab]);

  return (
    <Section id="servicios" className="min-h-[50vh]">
      <SectionTitle className="text-center">Servicios</SectionTitle>
      <div className="mb-10 grid grid-cols-2 gap-y-2 sm:grid-cols-4">
        <TabButton onClick={() => setActiveTab(0)} isActive={activeTab === 0}>
          mejora de la <br />
          composición corporal
        </TabButton>
        <TabButton onClick={() => setActiveTab(1)} isActive={activeTab === 1}>
          dietoterapia
        </TabButton>
        <TabButton onClick={() => setActiveTab(2)} isActive={activeTab === 2}>
          embarazo y lactancia
        </TabButton>
        <TabButton onClick={() => setActiveTab(3)} isActive={activeTab === 3}>
          Alimentación <br /> vegetariana y vegana
        </TabButton>
      </div>
      {content}
    </Section>
  );
};

export default Servicios;
