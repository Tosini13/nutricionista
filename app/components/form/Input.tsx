import React from "react";
import { twMerge } from "tailwind-merge";

type InputPropsType = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName: string;
  error?: string | null;
};

const Input: React.FC<InputPropsType> = ({
  className,
  containerClassName,
  placeholder,
  id,
  error,
  ...props
}) => {
  const mergedContainerClassName = React.useMemo(
    () => twMerge("relative mt-[20px]", containerClassName),
    [containerClassName]
  );

  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "peer w-full bg-transparent p-[1.1rem] text-lg outline-none focus:outline-none focus:border-primary border-b-[0.5px] border-white transition-all duration-200",
        className
      ),
    [className]
  );
  return (
    <div className={mergedContainerClassName}>
      <input {...props} id={id} className={mergedClassName} placeholder=" " />
      <label
        htmlFor={id}
        className={
          "absolute left-0 top-0 -translate-y-[100%] pl-0 text-sm text-white transition-all duration-200 ease-out peer-placeholder-shown:top-[60%] peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:pl-[0rem]  peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-[100%] peer-focus:pl-0 peer-focus:text-sm peer-focus:text-primary"
        }
      >
        {placeholder}
      </label>
      {error && (
        <p className="absolute right-0 bottom-0 translate-y-[100%] text-sm text-white">
          Este campo es obligatorio
        </p>
      )}
    </div>
  );
};

export default Input;
