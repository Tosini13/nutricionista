import React from "react";
import logo from "../../../public/logo.svg";
import Button from "../form/Button";
import Hamburger from "./Hamburger";

type THeaderProps = {};

const Header: React.FC<THeaderProps> = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      <header className="py-4 px-8 shadow-md lg:px-24">
        <div id="headerContent">
          <div className="space-between flex items-center justify-between">
            <img src={logo} alt={"logo"} />
            <ul className="flex hidden pl-3 lg:relative">
              <MenuItems />
            </ul>
            <Button className="hidden lg:relative" disabled>
              pide cita
            </Button>
            <div className="relative" style={{ zIndex: "102" }}>
              <Hamburger
                onClick={() => setOpenMenu((open) => !open)}
                open={openMenu}
              />
            </div>
            <MenuScreen open={openMenu} hideMenu={() => setOpenMenu(false)} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

type TMenuItemsProps = {
  hideMenu?: () => void;
};

const MenuItems = ({ hideMenu }: TMenuItemsProps) => {
  return (
    <>
      <MenuItem href="#home" title="home" onClick={hideMenu} />
      <MenuItem href="#sobreMi" title="sobre mi" onClick={hideMenu} />
      <MenuItem href="#servicios" title="servicios" onClick={hideMenu} />
      <MenuItem href="#packs" title="packs" onClick={hideMenu} />
      <MenuItem href="#faq" title="FAQ" onClick={hideMenu} />
      <MenuItem href="#contacto" title="contacto" onClick={hideMenu} />
    </>
  );
};

type TMenuItemProps = {
  title: string;
  href: string;
  onClick?: () => void;
};

const MenuItem: React.FC<TMenuItemProps> = ({ title, href, onClick }) => {
  return (
    <li className="px-9">
      <a
        className="link"
        href={href}
        style={{ fontWeight: 400 }}
        onClick={onClick}
      >
        {title}
      </a>
    </li>
  );
};

type TMenuScreenProps = {
  open: boolean;
  hideMenu?: () => void;
};

const MenuScreen: React.FC<TMenuScreenProps> = ({ open, hideMenu }) => (
  <div
    className="fixed top-0 left-0 h-screen w-screen bg-white"
    style={{
      zIndex: "101",
      display: open ? "block" : "none",
    }}
  >
    <div className="p-6">
      <ul className="space-y-2">
        <MenuItems hideMenu={hideMenu} />
      </ul>
    </div>
  </div>
);
