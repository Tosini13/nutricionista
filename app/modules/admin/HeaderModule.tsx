import * as React from "react";
import { twMerge } from "tailwind-merge";

import Header from "~/components/header/Header";
import type { LinkType } from "~/components/header/Header";
import Button from "~/components/form/Button";
import Hamburger from "~/components/header/Hamburger";
import MobileMenuScreen from "~/components/header/MobileMenuScreen";

const MENU_LINKS: Array<LinkType> = [
  { href: "/admin/servicios", title: "servicios" },
  { href: "/admin/packs", title: "packs" },
  { href: "/admin/faqs", title: "FAQ" },
  { href: "/admin/contact", title: "contact" },
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

  const rightActions = React.useMemo(
    () => (
      <>
        <form action="/logout" method="post">
          <Button type="submit" className={"hidden whitespace-nowrap md:block"}>
            Log Out
          </Button>
        </form>
        <div className="block md:hidden" style={{ zIndex: "102" }}>
          <Hamburger
            onClick={() => setOpenMenu((open) => !open)}
            open={openMenu}
          />
        </div>
      </>
    ),
    [openMenu]
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
