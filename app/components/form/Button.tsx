import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = `bg-primary text-white font-semibold flex flex-row items-center justify-center
rounded-full px-10 py-4 font-medium lowercase tracking-wide appearance-button font-semibold uppercase cursor-pointer
transition-all duration-300 ease-out
hover-hover:hover:bg-primary-light hover-hover:hover:text-primary
[&_path]:fill-[#FFF] [&_path]:hover-hover:hover:fill-primary
`;

const secondaryThemeClassName = `bg-secondary hover-hover:hover:bg-secondary-light hover-hover:hover:bg-secondary-light hover-hover:hover:text-secondary
  [&_path]:fill-[#FFF] [&_path]:hover-hover:hover:fill-secondary`;

const alternativeThemeClassName = `bg-transparent text-primary border border-primary  hover-hover:hover:bg-primary hover-hover:hover:text-white`;

const biggerThemeClassName = "px-12 py-5";

const withIconThemeClassName =
  "px-4 [&_svg]:mr-2 [&_svg]:transition-all [&_svg]:duration-300  [&_svg]:h-[20px] [&_svg]:w-[20px]";

export type WithButtonStylePropsType = {
  secondary?: boolean;
  alternative?: boolean;
  bigger?: boolean;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export function withButtonStyle<PropsType extends object>(
  Component: React.ComponentType<PropsType>
): React.FC<WithButtonStylePropsType & PropsType> {
  return ({
    secondary,
    alternative,
    bigger,
    className: customClassName,
    icon,
    children,
    ...props
  }: WithButtonStylePropsType & PropsType) => {
    const className = React.useMemo(
      () =>
        twMerge(
          themeClassName,
          alternative ? alternativeThemeClassName : "",
          bigger ? biggerThemeClassName : "",
          icon ? withIconThemeClassName : "",
          secondary ? secondaryThemeClassName : "",
          customClassName
        ),
      [customClassName, alternative, secondary, bigger]
    );
    return (
      <Component
        className={className}
        {...(props as PropsType)}
        children={
          <>
            {icon}
            {children}
          </>
        }
      />
    );
  };
}

export const Button = withButtonStyle<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props) => <button data-test-id="button" {...props} />);

export const ButtonLink = withButtonStyle<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props) => <a data-test-id="button_link" {...props} />);
