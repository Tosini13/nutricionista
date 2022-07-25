import React from "react";
import logo from "../../../public/logo.svg";
import Button from "../form/Button";

type THeaderProps = {};

const Header: React.FC<THeaderProps> = () => {
  const [disabled, setDisabled] = React.useState(false);
  return (
    <header className="pt-10">
      <div className="space-between flex items-center justify-between">
        <img src={logo} alt={"logo"} />
        <ul className="flex pl-3">
          <MenuItem href="#home" title="home" />
          <MenuItem href="#sobreMi" title="sobre mi" />
          <MenuItem href="#servicios" title="servicios" />
          <MenuItem href="#packs" title="packs" />
          <MenuItem href="#faq" title="FAQ" />
          <MenuItem href="#contacto" title="contacto" />
        </ul>
        <Button
          disabled={disabled}
          onClick={() =>
            setDisabled((d) => {
              console.log("d", d);
              return !d;
            })
          }
        >
          pide cita
        </Button>
      </div>
    </header>
  );
};

type TMenuItemProps = {
  title: string;
  href: string;
};

const MenuItem: React.FC<TMenuItemProps> = ({ title, href }) => {
  return (
    <li className="px-8">
      <a
        className="border-black text-black hover:border-b"
        href={href}
        style={{ fontWeight: 400 }}
      >
        {title}
      </a>
    </li>
  );
};

export default Header;
