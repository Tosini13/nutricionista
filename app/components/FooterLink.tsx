import React from "react";
import { twMerge } from "tailwind-merge";

type TFooterLinkProps = React.LiHTMLAttributes<HTMLLIElement> & {
  title: string;
  href: string;
};

const FooterLink: React.FC<TFooterLinkProps> = ({
  title,
  href,
  className: customClassName,
}) => {
  const className = React.useMemo(
    () => twMerge("pb-6 last:pb-0 md:pb-2", customClassName),
    [customClassName]
  );

  return (
    <li className={className}>
      <a
        className={
          "text-primary transition-all duration-150 hover-hover:hover:text-white"
        }
        href={href}
        style={{ fontWeight: 400 }}
      >
        {title}
      </a>
    </li>
  );
};

export default FooterLink;
