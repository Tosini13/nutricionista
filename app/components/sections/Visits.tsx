import React from "react";
import { twMerge } from "tailwind-merge";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import avocado from "../../../public/images/normalVisits/tangerine-newt-A5uZlKIuiD8-unsplash 2.svg";
import apple from "../../../public/images/normalVisits/unsplash_hFBsF-CX5eQ.svg";

type VisitType = {
  id: string;
  title: string;
  cost: number;
  duration?: string;
};

const visits: VisitType[] = [
  {
    id: "1",
    title: "sin patologias",
    cost: 30,
  },
  {
    id: "2",
    title: "dietoterapia",
    cost: 40,
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
    <Section id="visits" className="md:mx-20">
      <SectionTitle className="text-center text-2xl uppercase">
        Visitas individuales
      </SectionTitle>
      <div className="relative mb-10 md:mx-16 lg:mx-0 xl:mx-20">
        <img
          src={avocado}
          alt="avocado"
          className="absolute bottom-0 left-0 hidden -translate-x-[65%] sm:block"
        />
        <img
          src={apple}
          alt="apple"
          className="absolute bottom-0 right-0 translate-y-[50%] translate-x-[50%]"
        />
        <div className="relative grid grid-cols-1 gap-y-8 rounded-3xl bg-white/75 p-10 shadow-xl backdrop-blur-sm lg:grid-cols-12">
          <div className="col-span-5">{leftColumn}</div>
          <div className="col-span-2 flex items-center justify-center">
            <div className="w-10/12 origin-center self-stretch border-b-2 border-gray lg:h-full lg:w-0 lg:border-l-2 lg:border-black" />
          </div>
          <div className="col-span-5">{rightColumn}</div>
        </div>
      </div>
    </Section>
  );
};

export default Visits;

type TVisistProps = {
  visit: VisitType;
};

const Visist: React.FC<TVisistProps> = ({ visit }) => {
  const costClassName = React.useMemo(
    () =>
      twMerge(
        "mr-2 self-start text-2xl font-semibold",
        visit.duration ? "" : "self-center"
      ),
    [visit.duration]
  );

  return (
    <div className="grid grid-cols-3">
      <div className="flex items-center justify-start">
        <p>{visit.title}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-5 origin-center border-b-2 border-black lg:w-10" />
      </div>
      <div className="flex h-20 w-full items-center justify-center">
        <p className={costClassName}>{visit.cost}€</p>
        {visit.duration && (
          <>
            <div className="h-1/2 origin-center rotate-45 border-l-2 border-black" />
            <p className="ml-2 self-end whitespace-nowrap font-semibold">
              {visit.duration}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
