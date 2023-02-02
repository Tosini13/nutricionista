import React from "react";
import { twMerge } from "tailwind-merge";
import Paragraph from "../sections/Paragraph";
import { Button } from "./Button";
import { CancelIcon, OkIcon } from "~/components/icons";

const themeClassName = "transition-all duration-300 mx-0";

export type WithConfirmationStylePropsType = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
};

export function withConfirmation<PropsType extends object>(
  Component: React.ComponentType<PropsType>
): React.FC<WithConfirmationStylePropsType & PropsType> {
  return ({
    className: customClassName,
    children,
    onClick,
    icon,
    ...props
  }: WithConfirmationStylePropsType & PropsType) => {
    const [confirm, setConfirm] = React.useState(false);

    const handleOnClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setConfirm(true);
      },
      []
    );

    const className = React.useMemo(
      () =>
        twMerge(
          themeClassName,
          customClassName,
          confirm ? "translate-x-[10px]" : "-translate-x-1/2"
        ),
      [customClassName, confirm]
    );

    const paragraphClassName = React.useMemo(
      () =>
        twMerge(
          "transition-all duration-300 text-center mb-2",
          confirm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"
        ),
      [confirm]
    );

    const noButtonClassName = React.useMemo(
      () =>
        twMerge(
          "transition-all duration-300",
          confirm
            ? "-translate-x-[10px] opacity-100"
            : "translate-x-1/2 opacity-0"
        ),
      [confirm]
    );
    return (
      <div>
        <Paragraph className={paragraphClassName}>Are you sure?</Paragraph>
        <div className="flex">
          <Button
            className={noButtonClassName}
            onClick={() => setConfirm(false)}
            icon={<CancelIcon />}
          >
            No
          </Button>
          <Component
            className={className}
            onClick={confirm ? onClick : handleOnClick}
            children={confirm ? "Yes" : children}
            {...(props as PropsType)}
            icon={confirm ? <OkIcon /> : icon}
            secondary={confirm}
          />
        </div>
      </div>
    );
  };
}
