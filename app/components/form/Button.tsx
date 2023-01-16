import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = `bg-primary text-white font-semibold flex flex-row items-center justify-center
rounded-xl px-8 py-3 font-medium lowercase tracking-wide appearance-button font-semibold uppercase
transition-all duration-300 ease-out
hover-hover:hover:shadow-xl hover-hover:hover:bg-primary-light hover-hover:hover:text-primary hover-hover:hover:shadow-[0px_4px_10px_rgba(104, 169, 87, 0.3)]`;

const secondaryThemeClassName = "bg-secondary hover:bg-secondary-light";

const Button: React.FC<React.LinkHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className = "",
  href,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () => twMerge(themeClassName, className),
    [className]
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
  return <a data-testId="button" className={className} {...props} />;
};
