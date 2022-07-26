import React from "react";
import { twMerge } from "tailwind-merge";

type TTabButtonProps = {
  children: React.ReactNode;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const TabButton: React.FC<TTabButtonProps> = ({
  children,
  isActive,
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        `uppercase transition duration-300 text-xs sm:text-lg highlight-none text-gray ${
          isActive ? "font-bold text-black" : ""
        }`,
        className
      ),
    [className, isActive]
  );
  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
};

export default TabButton;
