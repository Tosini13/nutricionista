import React from "react";
import SectionTitle from "./SectionTitle";

type VisitType = {
  id: string;
  title: string;
  cost: number;
  duration: string;
};

const visits: VisitType[] = [
  {
    id: "1",
    title: "la visita",
    cost: 50,
    duration: "50-60 min",
  },
  {
    id: "2",
    title: "Seguimientos",
    cost: 30,
    duration: "30-40 min",
  },
  {
    id: "3",
    title: "1a visita dietoterapia",
    cost: 60,
    duration: "60 min",
  },
  {
    id: "4",
    title: "Seguimientos dietoterapia",
    cost: 40,
    duration: "40 min",
  },
];

type TVisitsProps = {};

const Visits: React.FC<TVisitsProps> = () => {
  const leftColumn = React.useMemo(
    () =>
      visits
        .slice(0, Math.ceil(visits.length / 2))
        .map((visit) => <Visist key={visit.id} visit={visit} />),
    []
  );

  const rightColumn = React.useMemo(
    () =>
      visits
        .slice(Math.ceil(visits.length / 2))
        .map((visit) => <Visist key={visit.id} visit={visit} />),
    []
  );

  return (
    <section id="#servicios" className="mx-20">
      <SectionTitle className="mb-10 text-center">Visita normal</SectionTitle>
      <div className="mx-20 mb-10 grid grid-cols-12 rounded-3xl bg-white/75 p-10 shadow-xl">
        <div className="col-span-5">{leftColumn}</div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="h-full origin-center self-stretch border-l-2 border-black" />
        </div>
        <div className="col-span-5">{rightColumn}</div>
      </div>
    </section>
  );
};

export default Visits;

type TVisistProps = {
  visit: VisitType;
};

const Visist: React.FC<TVisistProps> = ({ visit }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex items-center justify-start">
        <p>{visit.title}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-10 origin-center border-b-2 border-black" />
      </div>
      <div className="flex h-20 w-full items-center justify-center">
        <p className="fontSemiBold mr-2 self-start text-2xl">{visit.cost}€</p>
        <div className="h-1/2 origin-center rotate-45 border-l-2 border-black" />
        <p className="fontSemiBold ml-2 self-end whitespace-nowrap">
          {visit.duration}
        </p>
      </div>
    </div>
  );
};
