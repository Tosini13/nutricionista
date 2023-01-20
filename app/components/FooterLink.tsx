type TFooterLinkProps = {
  title: string;
  href: string;
};

const FooterLink: React.FC<TFooterLinkProps> = ({ title, href }) => {
  return (
    <li className="pb-6 last:pb-0 md:pb-2">
      <a
        className="text-primary transition-all duration-150 hover-hover:hover:text-white"
        href={href}
        style={{ fontWeight: 400 }}
      >
        {title}
      </a>
    </li>
  );
};

export default FooterLink;
