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
        `bg-gradient-to-r from-button-from-bg to-button-to-bg text-white font-semibold flex flex-row items-center justify-center
         rounded-md px-8 py-3 font-medium lowercase tracking-wide appearance-button 
         transition-all duration-300 ease-out
         hover-hover:hover:shadow-xl hover-hover:hover:from-[#69BC54] hover-hover:hover:to-[#69BC54] hover-hover:hover:shadow-[0px_4px_10px_rgba(104, 169, 87, 0.3)]`,
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
