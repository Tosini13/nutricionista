import React from "react";
import SectionTitle from "./SectionTitle";
import arrowRight from "../../../public/images/arrow_right_icon_dark.png";
import { twMerge } from "tailwind-merge";
import Paragraph from "./Paragraph";
import Section from "./Section";
import type { LoaderData } from "~/routes";

type FAQType = {
  id: string;
  question: string;
  answer: string;
};

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

type TFaqProps = {
  faq: FAQType;
};

const Faq: React.FC<TFaqProps> = ({ faq }) => {
  const [open, setOpen] = React.useState(false);

  const styleIcon = React.useMemo(
    () => (open ? { transform: "rotateZ(90deg)" } : {}),
    [open]
  );

  const classNameAnswer = React.useMemo(
    () => (open ? "max-h-[100vh] pt-2 pb-4" : ""),
    [open]
  );

  return (
    <div className="mb-6 rounded-xl bg-white/75 shadow-md">
      <div
        className="noFocus flex flex cursor-pointer select-none items-center px-8 py-4 md:py-6"
        onClick={() => setOpen((open) => !open)}
      >
        <img
          className="mr-6 h-4 transition-transform duration-150 ease-in-out"
          src={arrowRight}
          alt="arrow button"
          style={styleIcon}
        />
        <h6 className="font-semibold">{faq.question}</h6>
      </div>
      <Answer className={classNameAnswer}>{faq.answer}</Answer>
    </div>
  );
};

const Answer: React.FC<React.ButtonHTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "max-h-0 px-8 py-0 transition-all duration-150 ease-in-out overflow-hidden box-content text-md leading-7",
        className
      ),
    [className]
  );
  /**
   * @todo
   * add overflow-y-auto without scroll's splash
   */
  return <Paragraph className={mergedClassName} {...props} />;
};
