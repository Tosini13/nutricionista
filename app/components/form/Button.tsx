import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${className} button fontSemiBold flex flex-row items-center justify-center rounded-md px-8 py-3 font-medium lowercase tracking-wide`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
