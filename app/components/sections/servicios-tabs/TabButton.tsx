import React from "react";

type TTabButtonProps = {
  children: React.ReactNode;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const TabButton: React.FC<TTabButtonProps> = ({
  children,
  isActive,
  ...props
}) => {
  const className = React.useMemo(
    () => `uppercase transition duration-300 ${isActive ? "fontBold" : ""}`,
    [isActive]
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default TabButton;
