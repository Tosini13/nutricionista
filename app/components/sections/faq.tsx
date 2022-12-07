import React from "react";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import type { LoaderData } from "~/routes";
import Faq from "../faqs/Faq";

type TFaqsProps = {
  faqs: LoaderData["faqs"];
};

const Faqs: React.FC<TFaqsProps> = ({ faqs }) => {
  return (
    <Section id="faq" className="md:mx-20">
      <SectionTitle className="text-center">FAQ</SectionTitle>
      <div className="lg:mx-20">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </Section>
  );
};

export default Faqs;
