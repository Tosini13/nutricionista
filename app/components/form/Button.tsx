import React from "react";

type TButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.DOMAttributes<HTMLButtonElement>["onClick"];
};

const Button: React.FC<TButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button
      className={
        "button flex flex-row items-center justify-center rounded-md px-8 py-3 font-medium uppercase"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
