import React from "react";
import { twMerge } from "tailwind-merge";
import Paragraph from "../sections/Paragraph";

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
  return (
    <Paragraph
      data-test-id="faq_answer"
      className={mergedClassName}
      {...props}
    />
  );
};

export default Answer;
