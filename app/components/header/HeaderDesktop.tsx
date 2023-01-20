import React from "react";
import { twMerge } from "tailwind-merge";
import { TLinkType } from "~/modules/HeaderModule";
import { PHONE_NUMBER } from "~/utils/media";
import Button from "../form/Button";
import Link from "../form/Link";
import Logo from "../Logo";

const headerThemeClassName =
  "bg-[rgba(255,255,255,0.96)] transition-shadow duration-300 ease-out w-full";

type HeaderDesktopProps = {
  links: Array<TLinkType>;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ links }) => {
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

  const headerContentClassName = React.useMemo(
    () =>
      twMerge(
        "max-w-theme mx-auto px-2 xl:px-0 flex items-center transition-all duration-300 py-4",
        isOnTop ? "py-10" : ""
      ),
    [isOnTop]
  );

  const buttonClassName = React.useMemo(
    () =>
      twMerge(
        "ml-auto uppercase",
        isOnTop
          ? "bg-primary-light text-primary hover-hover:hover:bg-primary hover-hover:hover:text-white"
          : ""
      ),
    [isOnTop]
  );

  return (
    <div data-testid="header_desktop" ref={ref} className={headerClassName}>
      <div className={headerContentClassName}>
        <Logo />
        <div className="mx-1 flex grow items-center justify-center space-x-2 semi-md:space-x-8 large:space-x-14">
          {links.map((link) => (
            <Link
              key={`${link.title}_${link.href}`}
              title={link.title}
              href={link.href}
            />
          ))}
        </div>
        <Button className={buttonClassName} href="#contact">
          Pide Cita
        </Button>
      </div>
    </div>
  );
};

export default HeaderDesktop;
