import React from "react";
import SectionTitle from "./SectionTitle";
import arrowRight from "../../../public/images/arrow_right_icon_dark.png";
import { twMerge } from "tailwind-merge";
import Paragraph from "./Paragraph";

type FAQType = {
  id: string;
  question: string;
  answer: string;
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac est vitae arcu fringilla auctor. Pellentesque et turpis vel elit tincidunt vehicula. Nunc eu purus arcu. Cras posuere tortor vel est elementum imperdiet. Donec nec accumsan dolor. Pellentesque convallis nulla sit amet est faucibus, at lacinia massa vehicula. Etiam maximus quam ut condimentum laoreet. Etiam ut placerat dui. Suspendisse pretium, ligula ac posuere sodales, urna urna cursus nisi, ac convallis felis justo sed magna.";

const faqs: FAQType[] = [
  {
    id: "1",
    question: "¿Como sé si puedes ayudarme con mi problema?",
    answer: loremIpsum,
  },
  {
    id: "2",
    question: "¿Cada cuanto tiempo tengo que tener las visitas de seguimiento?",
    answer: loremIpsum,
  },
  {
    id: "3",
    question: "¿Tendré soporte entre una visita y otra para preguntar dudas?",
    answer: loremIpsum,
  },
  {
    id: "4",
    question: "¿Es igual el servicio online que el presencial?",
    answer: loremIpsum,
  },
  {
    id: "5",
    question: "¿Trabajas con aseguradoras?",
    answer: loremIpsum,
  },
  {
    id: "6",
    question: "¿Cómo puedo hacer el pago?",
    answer: loremIpsum,
  },
  {
    id: "7",
    question: "¿Si he comprado una cita, se puede cambiar o devolver? ",
    answer: loremIpsum,
  },
];

type TFaqsProps = {};

const Faqs: React.FC<TFaqsProps> = () => {
  return (
    <section id="#servicios" className="mx-20 min-h-[75vh]">
      <SectionTitle className="mb-10 text-center">FAQ</SectionTitle>
      <div className="mx-20">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
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
        className="flex flex cursor-pointer select-none items-center px-8 py-4"
        onClick={() => setOpen((open) => !open)}
      >
        <img
          className="mr-6 h-4 transition-transform duration-150 ease-in-out"
          src={arrowRight}
          alt="arrow button"
          style={styleIcon}
        />
        <h6 className="fontSemiBold">{faq.question}</h6>
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
        "max-h-0 px-8 py-0 transition-all duration-150 ease-in-out overflow-hidden box-content text-md",
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
