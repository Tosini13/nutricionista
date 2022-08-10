import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type TwithIconProps<T> = {
  props: T;
  iconProps: React.ImgHTMLAttributes<HTMLImageElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

function withIcon<TProps>(Component: React.FC<TProps>) {
  const ComponentWithIcon = ({
    props,
    iconProps: { src, alt, className: iconClassName, ...restIconProps },
    containerProps,
  }: TwithIconProps<TProps>) => {
    const mergedIconClassName = useMemo(
      () => twMerge("absolute bottom-5 right-5 cursor-pointer", iconClassName),
      [iconClassName]
    );

    const mergedContainerClassName = useMemo(
      () => twMerge("relative", containerProps?.className),
      [containerProps?.className]
    );

    return (
      <div {...containerProps} className={mergedContainerClassName}>
        <Component {...props} />
        <img
          className={mergedIconClassName}
          src={src}
          alt={alt}
          {...restIconProps}
        />
      </div>
    );
  };
  return ComponentWithIcon;
}

export default withIcon;
