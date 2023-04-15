import React from "react";

type TFooterLinkProps = React.LiHTMLAttributes<HTMLLIElement> & {
  title: string;
  href: string;
};

const FooterLink: React.FC<TFooterLinkProps> = ({ title, href }) => {
  return (
    <a
      className={
        "text-primary transition-all duration-150 hover-hover:hover:text-white"
      }
      href={href}
      style={{ fontWeight: 400 }}
    >
      {title}
    </a>
  );
};

export default FooterLink;
