import React, { AnchorHTMLAttributes, LinkHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = `bg-primary text-white font-semibold flex flex-row items-center justify-center
rounded-full px-10 py-4 font-medium lowercase tracking-wide appearance-button font-semibold uppercase cursor-pointer
transition-all duration-300 ease-out
hover-hover:hover:bg-primary-light hover-hover:hover:text-primary`;

const secondaryThemeClassName =
  "bg-secondary hover:bg-secondary-light hover-hover:hover:bg-secondary-light hover-hover:hover:text-secondary";

const alternativeThemeClassName = `bg-transparent text-primary border border-primary  hover-hover:hover:bg-primary hover-hover:hover:text-white`;

const biggerTHemeClassName = "px-12 py-5";

type WithButtonStylePropsType = {
  secondary?: boolean;
  alternative?: boolean;
  bigger?: boolean;
  className?: string;
};

export function withButtonStyle<PropsType extends object>(
  Component: React.ComponentType<PropsType>
): React.FC<WithButtonStylePropsType & PropsType> {
  return ({
    secondary,
    alternative,
    bigger,
    className: customClassName,
    ...props
  }: WithButtonStylePropsType & PropsType) => {
    const className = React.useMemo(
      () =>
        twMerge(
          themeClassName,
          secondary ? secondaryThemeClassName : "",
          alternative ? alternativeThemeClassName : "",
          bigger ? biggerTHemeClassName : "",
          customClassName
        ),
      [customClassName, alternative, secondary, bigger]
    );
    return <Component className={className} {...(props as PropsType)} />;
  };
}

export const Button = withButtonStyle<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props) => <button data-test-id="button" {...props} />);

export const ButtonLink = withButtonStyle<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props) => <a data-test-id="button_link" {...props} />);
