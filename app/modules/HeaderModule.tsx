import React from "react";
import HeaderDesktop from "~/components/header/HeaderDesktop";
import HeaderMobile from "~/components/header/HeaderMobile";

export type TLinkType = {
  title: string;
  href: string;
};

export const links: Array<TLinkType> = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Sobre mí",
    href: "/#sobreMi",
  },
  {
    title: "Servicios",
    href: "/#servicios",
  },
  {
    title: "Packs",
    href: "/#packs",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
  {
    title: "Contacto",
    href: "/#contact",
  },
];

type HeaderModuleProps = {};

const HeaderModule: React.FC<HeaderModuleProps> = () => {
  return (
    <header
      data-testid="header_module"
      className="sticky top-0 left-0 z-50 max-h-[84px] w-full"
    >
      <div className="hidden md:block">
        <HeaderDesktop links={links} />
      </div>
      <div className="block md:hidden">
        <HeaderMobile links={links} />
      </div>
    </header>
  );
};

export default HeaderModule;
