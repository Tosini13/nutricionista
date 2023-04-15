type ButtonIconPropsType = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactNode;
};

const ButtonIcon: React.FC<ButtonIconPropsType> = ({ icon, ...props }) => {
  return (
    <a
      data-test-id="button_icon"
      className="group block h-[50px] w-[50px] rounded-full bg-primary-light p-3 transition-all duration-300 
      hover-hover:hover:bg-primary [&_path]:transition-all [&_path]:duration-300 [&_path]:hover-hover:hover:fill-[#FFF]"
      {...props}
    >
      {icon}
    </a>
  );
};

export default ButtonIcon;
