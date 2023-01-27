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
        "max-w-screen-xl overflow-x-hidden xl:mx-auto -mt-8 md:mt-0 pt-20 md:pt-28 pb-10 mx-2",
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
