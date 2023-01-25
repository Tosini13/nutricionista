import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = `bg-primary text-white font-semibold flex flex-row items-center justify-center
rounded-full px-10 py-4 font-medium lowercase tracking-wide appearance-button font-semibold uppercase cursor-pointer
transition-all duration-300 ease-out
hover-hover:hover:bg-primary-light hover-hover:hover:text-primary`;

const secondaryThemeClassName =
  "bg-secondary hover:bg-secondary-light hover-hover:hover:bg-secondary-light hover-hover:hover:text-secondary";

const alternativeThemeClassName = `bg-transparent text-primary border border-primary  hover-hover:hover:bg-primary hover-hover:hover:text-white`;

const biggerTHemeClassName = "px-12 py-5";

type ButtonProps = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  secondary?: boolean;
  alternative?: boolean;
  bigger?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href,
  secondary,
  alternative,
  bigger,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        themeClassName,
        secondary ? secondaryThemeClassName : "",
        alternative ? alternativeThemeClassName : "",
        bigger ? biggerTHemeClassName : "",
        className
      ),
    [className, alternative, secondary, bigger]
  );

  return (
    <a href={href} className={mergedClassName} {...props}>
      {children}
    </a>
  );
};

export default Button;

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  secondary?: boolean;
};
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className: customClassName,
  secondary,
  ...props
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        themeClassName,
        secondary ? secondaryThemeClassName : "",
        customClassName
      ),
    [customClassName]
  );
  return <a data-testid="button" className={className} {...props} />;
};
