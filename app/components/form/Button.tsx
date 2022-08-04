import React from "react";
import { twMerge } from "tailwind-merge";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "button fontSemiBold flex flex-row items-center justify-center rounded-md px-8 py-3 font-medium lowercase tracking-wide",
        className
      ),
    [className]
  );
  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
