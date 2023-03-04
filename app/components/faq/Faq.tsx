import React from "react";
import { twMerge } from "tailwind-merge";
import type { FAQType } from "~/modules/FaqModule";
import Answer from "./Answer";

const themeClassNames = {
  question:
    "noFocus flex cursor-pointer select-none items-center rounded-lg bg-primary-light text-primary px-4 py-4 md:py-8 transition-all duration-150",
  arrow:
    "relative ml-auto h-[2px] min-h-[2px] min-w-[10px] w-[10px] before:transition-all before:duration-500 after:transition-all after:duration-500 before:absolute before:left-0 before:h-full before:w-full before:translate-x-[35%] before:-rotate-[40deg] before:bg-primary after:absolute after:right-0 after:h-full after:w-full after:-translate-x-[35%] after:rotate-[40deg] after:bg-primary",
};

type FaqPropsType = { faq: FAQType };

const Faq: React.FC<FaqPropsType> = ({ faq }) => {
  const [open, setOpen] = React.useState(false);

  const classNameAnswer = React.useMemo(
    () => (open ? "max-h-[200vh] py-8 opacity-1" : ""),
    [open]
  );

  const questionClassName = React.useMemo(
    () =>
      twMerge(themeClassNames.question, open ? "bg-primary text-white" : ""),
    [open]
  );

  const arrowClassName = React.useMemo(
    () =>
      twMerge(
        themeClassNames.arrow,
        open
          ? "before:bg-white before:rotate-[0deg] after:bg-white after:rotate-[0deg]"
          : ""
      ),
    [open]
  );

  return (
    <div data-test-id="faq">
      <div
        className={questionClassName}
        onClick={() => setOpen((open) => !open)}
      >
        <h3 className="mr-2 font-semibold">{faq.question}</h3>
        <div className={arrowClassName} />
      </div>
      <Answer className={classNameAnswer}>{faq.answer}</Answer>
    </div>
  );
};

export default Faq;
