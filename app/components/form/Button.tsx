import React from "react";
import { twMerge } from "tailwind-merge";

const Button: React.FC<React.LinkHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className = "",
  href,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "button fontSemiBold flex flex-row items-center justify-center rounded-md px-8 py-3 font-medium lowercase tracking-wide appearance-button hover:shadow-xl transition-all duration-300 ease-out",
        className
      ),
    [className]
  );
  return (
    <a href={href} className={mergedClassName} {...props}>
      {children}
    </a>
  );
};

export default Button;
