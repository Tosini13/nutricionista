import React from "react";
import { twMerge } from "tailwind-merge";

type PackContainerPropsType = {
  testId?: string;
  recommended?: boolean;
  children: React.ReactNode;
};

const PackContainer: React.FC<PackContainerPropsType> = ({
  testId,
  recommended,
  children,
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        "max-w-[300px] mx-auto h-full flex flex-col border border-[#FFDCE2] relative flex h-full w-full flex-col rounded-3xl bg-white p-9",
        recommended ? "border-primary" : ""
      ),
    [recommended]
  );

  return (
    <div data-test-id={testId && "pack_container"} className={className}>
      {children}
    </div>
  );
};

export default PackContainer;
