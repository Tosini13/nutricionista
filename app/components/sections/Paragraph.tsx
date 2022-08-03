import React from "react";
import { twMerge } from "tailwind-merge";

type TParagraphProps = React.ButtonHTMLAttributes<HTMLParagraphElement>;
const Paragraph: React.FC<TParagraphProps> = ({ className, ...props }) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "fontLight pb-10 pb-8 text-lg leading-10 tracking-wide",
        className
      ),
    [className]
  );
  return <p className={mergedClassName} {...props} />;
};

export default React.memo<TParagraphProps>(Paragraph);
