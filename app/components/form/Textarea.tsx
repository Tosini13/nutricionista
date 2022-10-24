import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import sendIcon from "../../../public/images/send_icon.svg";

type TextareaPropsType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaPropsType> = ({
  className,
  id,
  placeholder,
  ...props
}) => {
  const mergedClassName = useMemo(
    () =>
      twMerge(
        "peer w-full rounded-xl bg-gray-dark p-[1.1rem] text-lg focus:outline-none",
        className
      ),
    [className]
  );

  return (
    <div className="relative mt-[20px]">
      <textarea className={mergedClassName} placeholder=" " {...props} />
      <label
        htmlFor={id}
        className={`absolute left-0 top-0 -translate-y-[100%] pl-0 text-sm text-gray transition-all duration-200 ease-out
          peer-placeholder-shown:top-[1.9rem] peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:pl-[1.1rem] peer-placeholder-shown:text-lg
          peer-focus:top-0 peer-focus:-translate-y-[100%] peer-focus:pl-0 peer-focus:text-sm peer-focus:text-main-light`}
      >
        {placeholder}
      </label>
      <button
        type="submit"
        className={
          "absolute bottom-5 right-5 cursor-pointer grayscale-0 peer-placeholder-shown:grayscale"
        }
      >
        <img src={sendIcon} alt={"send icon"} />
      </button>
    </div>
  );
};

export default Textarea;
