import * as React from "react";
import { twMerge } from "tailwind-merge";

import Header from "~/components/header/Header";
import type { LinkType } from "~/components/header/Header";
import { LinkButton } from "~/components/form/Button";
import Hamburger from "~/components/header/Hamburger";
import MobileMenuScreen from "~/components/header/MobileMenuScreen";

const MENU_LINKS: Array<LinkType> = [
  { href: "#home", title: "home" },
  { href: "#sobreMi", title: "sobre mi" },
  { href: "#servicios", title: "servicios" },
  { href: "#packs", title: "packs" },
  { href: "#faq", title: "FAQ" },
  { href: "#contact", title: "contact" },
];

type THeaderModuleProps = {};

const HeaderModule: React.FC<THeaderModuleProps> = () => {
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

  const rightActions = React.useMemo(
    () => (
      <>
        <LinkButton className={buttonStyle} href="#contact">
          pide cita
        </LinkButton>
        <div className="block md:hidden" style={{ zIndex: "102" }}>
          <Hamburger
            onClick={() => setOpenMenu((open) => !open)}
            open={openMenu}
          />
        </div>
      </>
    ),
    [buttonStyle, openMenu]
  );
  return (
    <>
      <header ref={ref} className={headerStyle}>
        <Header links={MENU_LINKS} rightAction={rightActions} />
      </header>
      <MobileMenuScreen
        links={MENU_LINKS}
        open={openMenu}
        hideMenu={() => setOpenMenu(false)}
      />
    </>
  );
};

export default HeaderModule;
