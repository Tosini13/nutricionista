import React from "react";
import logo from "../../../public/logoWithTitle.svg";
import MenuLink from "./MenuLink";

export type LinkType = {
  href: string;
  title: string;
};

type THeaderProps = {
  links: Array<LinkType>;
  rightAction: React.ReactNode;
};

const Header: React.FC<THeaderProps> = ({ links, rightAction }) => {
  return (
    <div className="mx-4 max-w-[1400px] py-4 sm:mx-6 lg:mx-20">
      <div className="space-between flex items-center justify-between">
        <a className="cursor-pointer" href="/">
          <img
            src={logo}
            alt={"logo"}
            className="max-h-10 transition-[max-height] md:max-h-5 lg:max-h-10"
          />
        </a>
        <ul className="hidden pl-3 md:flex">
          {links.map((link) => (
            <li
              key={link.href}
              className="w-fit transition-[padding] duration-300 ease-out md:px-2 lg:px-4 xl:px-9"
            >
              <MenuLink className="link" href={link.href} title={link.title} />
            </li>
          ))}
        </ul>
        {rightAction}
      </div>
    </div>
  );
};

export default Header;
