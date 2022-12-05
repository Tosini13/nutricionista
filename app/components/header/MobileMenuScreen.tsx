import * as React from "react";
import { twMerge } from "tailwind-merge";
import { LinkButton } from "../form/Button";
import type { LinkType } from "./Header";
import MenuLink from "./MenuLink";

type TMobileMenuScreenProps = {
  links: Array<LinkType>;
  open: boolean;
  hideMenu?: () => void;
};

const MobileMenuScreen: React.FC<TMobileMenuScreenProps> = ({
  links,
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
          {links.map((link) => (
            <li
              key={link.href}
              className="w-full rounded-md px-2 py-3 transition-[padding] duration-300 ease-out"
              /**
                 * @todo for active link
                style={{
                  backgroundColor: "rgba(104, 169, 87, 0.15)",
                }}
                 */
            >
              <MenuLink
                href={link.href}
                title={link.title}
                onClick={hideMenu}
              />
            </li>
          ))}
        </ul>
        <LinkButton
          className="mb-10 whitespace-nowrap"
          href="#contact"
          onClick={hideMenu}
        >
          pide cita
        </LinkButton>
      </div>
    </div>
  );
};
export default MobileMenuScreen;
