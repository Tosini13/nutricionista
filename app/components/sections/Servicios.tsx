import React from "react";
import SectionTitle from "./SectionTitle";
import BodyComposition from "./servicios-tabs/BodyComposition";
import DietTherapy from "./servicios-tabs/DietTherapy";
import TabButton from "./servicios-tabs/TabButton";

type TServiciosProps = {};

const Servicios: React.FC<TServiciosProps> = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const content = React.useMemo(() => {
    switch (activeTab) {
      case 1:
        return <DietTherapy />;
      case 2:
        return <DietTherapy />;
      default:
        return <BodyComposition />;
    }
  }, [activeTab]);

  return (
    <section id="#servicios" className="mx-20">
      <SectionTitle>Servicios</SectionTitle>
      <div className="mb-20 grid grid-cols-3">
        <TabButton onClick={() => setActiveTab(0)} isActive={activeTab === 0}>
          mejora de la composición corporal
        </TabButton>
        <TabButton onClick={() => setActiveTab(1)} isActive={activeTab === 1}>
          dietoterapia
        </TabButton>
        <TabButton onClick={() => setActiveTab(2)} isActive={activeTab === 2}>
          embarazo y lactancia
        </TabButton>
      </div>
      {content}
    </section>
  );
};

export default Servicios;
