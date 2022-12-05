import { twMerge } from "tailwind-merge";

type MenuLinkProps = {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
};

const MenuLink: React.FC<MenuLinkProps> = ({
  title,
  href,
  onClick,
  className: customClassName,
}) => {
  const className = twMerge("whitespace-nowrap", customClassName);
  return (
    <a
      className={className}
      href={href}
      style={{ fontWeight: 400 }}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

export default MenuLink;
