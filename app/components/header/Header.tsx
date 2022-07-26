import React from "react";
import { twMerge } from "tailwind-merge";
import logo from "../../../public/logoWithTitle.svg";
import Button from "../form/Button";
import Hamburger from "./Hamburger";

const menuItems = [
  { href: "#home", title: "Home" },
  { href: "#sobreMi", title: "Sobre mi" },
  { href: "#servicios", title: "Servicios" },
  { href: "#packs", title: "Packs" },
  { href: "#faq", title: "FAQ" },
  { href: "#contact", title: "Contact" },
];

type THeaderProps = {};

const Header: React.FC<THeaderProps> = () => {
  const ref = React.useRef<HTMLHeadElement>(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [isOnTop, setIsOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 70) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = React.useMemo(
    () =>
      twMerge(
        "2xl:px-24 transition-shadow duration-300 ease-out",
        isOnTop ? "shadow-none" : openMenu ? "md:shadow-md" : "shadow-md"
      ),
    [isOnTop, openMenu]
  );

  const buttonStyle = React.useMemo(
    () =>
      twMerge(
        "hidden whitespace-nowrap md:block",
        isOnTop
          ? "[&:not(a:hover)]:drop-shadow-none [&:not(a:hover)]:shadow-none [&:not(a:hover)]:from-button-disabled-bg [&:not(a:hover)]:to-button-disabled-bg [&:not(a:hover)]:text-button-disabled-text"
          : ""
      ),
    [isOnTop]
  );

  return (
    <>
      <header ref={ref} className={headerStyle}>
        <div className="mx-4 max-w-[1400px] py-4 sm:mx-6 lg:mx-20">
          <div className="space-between flex items-center justify-between">
            <img
              src={logo}
              alt={"logo"}
              className="max-h-10 transition-[max-height] md:max-h-5 lg:max-h-10"
            />
            <ul className="hidden pl-3 md:flex">
              {menuItems.map((item) => (
                <li
                  key={item.href}
                  className="w-fit transition-[padding] duration-300 ease-out md:px-2 lg:px-4 xl:px-9"
                >
                  <MenuItem
                    className="link"
                    href={item.href}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
            <Button className={buttonStyle} href="#contact">
              pide cita
            </Button>
            <div className="block md:hidden" style={{ zIndex: "102" }}>
              <Hamburger
                onClick={() => setOpenMenu((open) => !open)}
                open={openMenu}
              />
            </div>
          </div>
        </div>
      </header>
      <MobileMenuScreen open={openMenu} hideMenu={() => setOpenMenu(false)} />
    </>
  );
};

export default Header;

type TMenuItemProps = {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
};

const MenuItem: React.FC<TMenuItemProps> = ({
  title,
  href,
  onClick,
  className: customClassName,
}) => {
  const className = twMerge("whitespace-nowrap", customClassName);
  return (
    <a
      className={className}
      href={href}
      style={{ fontWeight: 400 }}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

type TMobileMenuScreenProps = {
  open: boolean;
  hideMenu?: () => void;
};

const MobileMenuScreen: React.FC<TMobileMenuScreenProps> = ({
  open,
  hideMenu,
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        "fixed top-0 left-0 h-screen w-screen bg-white pt-20 z-[99]",
        open ? "block md:hidden" : "hidden"
      ),
    [open]
  );

  return (
    <div className={className}>
      <div className="flex h-full flex-col divide-y p-6">
        <ul className="grow space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="w-full rounded-md px-2 py-3 transition-[padding] duration-300 ease-out"
              /**
               * @todo for active link
              style={{
                backgroundColor: "rgba(104, 169, 87, 0.15)",
              }}
               */
            >
              <MenuItem
                href={item.href}
                title={item.title}
                onClick={hideMenu}
              />
            </li>
          ))}
        </ul>
        <Button
          className="mb-10 whitespace-nowrap"
          href="#contact"
          onClick={hideMenu}
        >
          pide cita
        </Button>
      </div>
    </div>
  );
};
