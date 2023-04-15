import React from "react";
import { twMerge } from "tailwind-merge";
import sendIcon from "../../../public/images/send_icon.svg";

type TextareaPropsType = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string | null;
  hasSubmit?: boolean;
};

const Textarea: React.FC<TextareaPropsType> = ({
  className,
  id,
  placeholder,
  error,
  hasSubmit,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "peer w-full bg-transparent p-[1.1rem] px-0 text-lg outline-none focus:outline-none focus:border-secondary border-b-[0.5px] border-white transition-all duration-200",
        className
      ),
    [className]
  );

  return (
    <div className="relative mt-[20px]">
      <textarea
        id={id}
        className={mergedClassName}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 top-0 -translate-y-[100%] pl-0 text-sm text-white transition-all duration-200 ease-out
          peer-placeholder-shown:top-[55%] peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:pl-[0rem] peer-placeholder-shown:text-base
          peer-focus:top-0 peer-focus:-translate-y-[100%] peer-focus:pl-0 peer-focus:text-sm peer-focus:text-secondary`}
      >
        {placeholder}
      </label>
      {error && (
        <p className="absolute right-0 bottom-0 translate-y-[100%] text-sm text-red-400">
          Este campo es obligatorio
        </p>
      )}
      {hasSubmit && (
        <button
          type="submit"
          data-testid="submit_textarea"
          className={
            "absolute bottom-5 right-5 cursor-pointer grayscale-0 peer-placeholder-shown:grayscale"
          }
        >
          <img src={sendIcon} alt={"send icon"} />
        </button>
      )}
    </div>
  );
};

export default Textarea;
