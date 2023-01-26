import React from "react";
import { twMerge } from "tailwind-merge";

const link =
  "whitespace-nowrap first-letter:uppercase font-normal hover-hover:hover:font-medium transition-all duration-300";
const after =
  "after:block after:w-0 after:h-px after:block after:bg-neutral after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";
const secondaryThemeClassName = "text-secondary after:bg-secondary";

type LinkPropsType = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  secondary?: boolean;
};

const Link: React.FC<LinkPropsType> = ({
  title,
  href,
  onClick,
  className: customClassName,
  secondary,
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        link,
        after,
        secondary ? secondaryThemeClassName : "",
        customClassName
      ),
    [customClassName, secondary]
  );
  return (
    <a className={className} href={href} onClick={onClick} title={title}>
      {title}
    </a>
  );
};

export default Link;
