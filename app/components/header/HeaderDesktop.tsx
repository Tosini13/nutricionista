import React from "react";
import { twMerge } from "tailwind-merge";
import { TLinkType } from "~/modules/HeaderModule";
import { PHONE_NUMBER } from "~/utils/media";
import { ButtonLink } from "../form/Button";
import Link from "../form/Link";
import Logo from "../Logo";

const headerThemeClassName =
  "sticky top-0 left-0 w-full z-[50] bg-[rgba(255,255,255,0.96)] transition-shadow duration-300 ease-out w-full";

type HeaderDesktopProps = {
  links: Array<TLinkType>;
  actions?: React.ReactNode;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ links, actions }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOnTop, setIsOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position > 50) {
        setIsOnTop(false);
      } else if (position < 30) {
        setIsOnTop(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = React.useMemo(
    () => twMerge(headerThemeClassName, isOnTop ? "shadow-none" : "shadow-md"),
    [isOnTop]
  );

  const buttonClassName = React.useMemo(
    () =>
      twMerge(
        "ml-auto uppercase",
        isOnTop
          ? "[&_button]:bg-primary-light [&_button]:text-primary [&_button]:hover-hover:hover:bg-primary [&_button]:hover-hover:hover:text-white [&_a]:bg-primary-light [&_a]:text-primary [&_a]:hover-hover:hover:bg-primary [&_a]:hover-hover:hover:text-white"
          : ""
      ),
    [isOnTop]
  );

  return (
    <div data-testid="header_desktop" ref={ref} className={headerClassName}>
      <div className="mx-auto flex max-w-screen-xl items-center px-2 py-4 transition-all duration-300 xl:px-0">
        <a href="/#home">
          <Logo />
        </a>
        <div className="mx-1 flex grow items-center justify-center space-x-2 semi-md:space-x-8 large:space-x-14">
          {links.map((link) => (
            <div
              key={`${link.title}_${link.href}`}
              className="inline-block text-[0px]"
            >
              <Link
                title={link.title}
                href={link.href}
                className="inline-block text-center text-base before:invisible before:block
                before:h-[0px] before:overflow-hidden before:font-medium before:content-[attr(title)]
                "
              />
            </div>
          ))}
        </div>
        <div className={buttonClassName}>{actions}</div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
