import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = `bg-primary text-white font-semibold flex flex-row items-center justify-center
rounded-xl px-8 py-3 font-medium lowercase tracking-wide appearance-button font-semibold uppercase cursor-pointer
transition-all duration-300 ease-out
hover-hover:hover:bg-primary-light hover-hover:hover:text-primary`;

const secondaryThemeClassName =
  "bg-secondary hover:bg-secondary-light hover-hover:hover:bg-secondary-light hover-hover:hover:text-secondary";

const alternativeThemeClassName = `bg-transparent text-primary border border-primary  hover-hover:hover:bg-primary hover-hover:hover:text-white`;

type ButtonProps = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  secondary?: boolean;
  alternative?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href,
  secondary,
  alternative,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        themeClassName,
        secondary ? secondaryThemeClassName : "",
        alternative ? alternativeThemeClassName : "",
        className
      ),
    [className, alternative, secondary]
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
