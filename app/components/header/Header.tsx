import React from "react";
import logo from "../../../public/logoWithTitle.svg";
import Button from "../form/Button";
import Hamburger from "./Hamburger";

type THeaderProps = {};

const Header: React.FC<THeaderProps> = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      <header className="py-4 px-4 shadow-md 2xl:px-24">
        <div className="headerContent">
          <div className="space-between flex items-center justify-between">
            <img
              src={logo}
              alt={"logo"}
              className="max-h-10 transition-[max-height] md:max-h-5 lg:max-h-10"
            />
            <ul className="hidden pl-3 md:flex">
              <MenuItems />
            </ul>
            <Button
              className="hidden whitespace-nowrap md:block"
              href="#contact"
            >
              pide cita
            </Button>
            <div className="block md:hidden" style={{ zIndex: "102" }}>
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
      <MenuItem href="#contact" title="contacto" onClick={hideMenu} />
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
    <li className="w-fit transition-[padding] duration-300 ease-out md:px-2 lg:px-4 xl:px-9">
      <a
        className="link whitespace-nowrap"
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
