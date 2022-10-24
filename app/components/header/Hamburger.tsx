import { twMerge } from "tailwind-merge";

type THamburgerProps = {
  onClick: () => void;
  open?: boolean;
};

const Hamburger: React.FC<THamburgerProps> = ({ onClick, open = false }) => {
  const topStyle = twMerge(
    "w-full border-b-2 border-black transition duration-300 ease-out",
    open ? "translate-y-1.5  rotate-45" : ""
  );

  const centerStyle = twMerge(
    "w-full max-w-full border-b-2 border-black transition-all duration-300 ease-out",
    open ? "max-w-0" : ""
  );

  const bottomStyle = twMerge(
    "w-full border-b-2 border-black transition duration-300 ease-out",
    open ? "-translate-y-1.5  -rotate-45" : ""
  );

  return (
    <>
      <div onClick={onClick} className="w-[20px] cursor-pointer space-y-1">
        <div className={topStyle} />
        <div className={centerStyle} />
        <div className={bottomStyle} />
      </div>
    </>
  );
};

export default Hamburger;
