import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type TextareaPropsType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaPropsType> = ({ className, ...props }) => {
  const mergedClassName = useMemo(
    () =>
      twMerge(
        "w-full rounded-xl bg-gray-200 p-[1.1rem] text-lg focus:outline-none",
        className
      ),
    [className]
  );

  return <textarea className={mergedClassName} {...props} />;
};

export default Textarea;
