import React from "react";
import { twMerge } from "tailwind-merge";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "w-full rounded-xl bg-gray-200 p-[1.1rem] text-lg focus:outline-none",
        className
      ),
    [className]
  );
  return (
    <div>
      <input
        {...props}
        className={mergedClassName} //placeholder:text-slate-400
      />
    </div>
  );
};

export default Input;
