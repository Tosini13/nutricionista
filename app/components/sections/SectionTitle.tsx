import React from "react";

type TSectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<TSectionTitleProps> = ({ children }) => {
  return (
    <h2
      className="title fontSemiBold pb-8 text-4xl font-bold"
      data-testid="sobremi_title"
    >
      {children}
    </h2>
  );
};

export default React.memo<TSectionTitleProps>(SectionTitle);
