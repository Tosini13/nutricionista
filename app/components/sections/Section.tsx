import React from "react";
import { twMerge } from "tailwind-merge";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "max-w-screen-xl overflow-x-hidden xl:mx-auto pt-28 pb-20 mx-2 sm:mx-6",
        className
      ),
    [className]
  );
  return (
    <section className={mergedClassName} {...props}>
      {children}
    </section>
  );
};

export default Section;
