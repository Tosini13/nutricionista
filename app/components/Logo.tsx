import React from "react";
import LOGO_ICON from "../../public/img/logos/logo.svg";
import SECONDARY_LOGO from "../../public/img/logos/logo.secondary.svg";

type LogoProps = {
  secondary?: boolean;
};

const Logo: React.FC<LogoProps> = ({ secondary }) => {
  return (
    <div data-testId="logo" className="flex items-center">
      <img src={secondary ? SECONDARY_LOGO : LOGO_ICON} alt="logo" />
    </div>
  );
};

export default Logo;
