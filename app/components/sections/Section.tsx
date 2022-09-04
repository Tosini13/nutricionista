import React from "react";
import { twMerge } from "tailwind-merge";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () => twMerge("lg:mx-20 pt-24", className),
    [className]
  );
  return (
    <section className={mergedClassName} {...props}>
      {children}
    </section>
  );
};

export default Section;
