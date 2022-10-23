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
        "bg-gradient-to-r from-button-from-bg to-button-to-bg text-white font-semibold flex flex-row items-center justify-center rounded-md px-8 py-3 font-medium lowercase tracking-wide appearance-button hover:shadow-xl transition-all duration-300 ease-out drop-shadow-[0_15px_30px_rgba(106,170,89,0.3)] shadow-[0_10px_22px_rgba(172,180,159,0.2)] ",
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
