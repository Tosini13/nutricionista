import { twMerge } from "tailwind-merge";

type THamburgerProps = {
  onClick: () => void;
  open?: boolean;
};

const Hamburger: React.FC<THamburgerProps> = ({ onClick, open = false }) => {
  const topStyle = twMerge(
    "mx-auto w-2/3 border-b-2 border-primary transition duration-300 ease-out",
    open ? "translate-y-1.5  rotate-45 w-full" : ""
  );

  const centerStyle = twMerge(
    "w-full max-w-full border-b-2 border-primary transition-all duration-300 ease-out",
    open ? "max-w-0" : ""
  );

  const bottomStyle = twMerge(
    "mx-auto w-2/3 border-b-2 border-primary transition duration-300 ease-out",
    open ? "-translate-y-1.5  -rotate-45 w-full" : ""
  );

  return (
    <>
      <div
        onClick={onClick}
        className="w-[20px] cursor-pointer space-y-1 highlight-none"
      >
        <div className={topStyle} />
        <div className={centerStyle} />
        <div className={bottomStyle} />
      </div>
    </>
  );
};

export default Hamburger;
