import React from "react";
import { twMerge } from "tailwind-merge";

type TSectionTitleProps = React.ButtonHTMLAttributes<HTMLHeadingElement>;

const SectionTitle: React.FC<TSectionTitleProps> = ({
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () => twMerge("title fontSemiBold pb-8 text-4xl font-bold", className),
    [className]
  );
  return (
    <h2 data-testid="sobremi_title" className={mergedClassName} {...props} />
  );
};

export default React.memo<TSectionTitleProps>(SectionTitle);
