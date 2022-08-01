type TParagraphProps = {
  children: React.ReactNode;
};

const Paragraph: React.FC<TParagraphProps> = ({ children }) => {
  return (
    <p className="fontLight pb-10 pb-8 text-lg leading-10 tracking-wide">
      {children}
    </p>
  );
};

export default Paragraph;
