import React from "react";
import { twMerge } from "tailwind-merge";

type TParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
const Paragraph: React.FC<TParagraphProps> = ({ className, ...props }) => {
  const mergedClassName = React.useMemo(
    () => twMerge("leading-8 tracking-wide", className),
    [className]
  );
  return <p className={mergedClassName} {...props} />;
};

export default React.memo<TParagraphProps>(Paragraph);
