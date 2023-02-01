import { Form } from "@remix-run/react";
import { Button, ButtonLink } from "~/components/form/Button";
import HeaderDesktop from "~/components/header/HeaderDesktop";
import HeaderMobile from "~/components/header/HeaderMobile";
import { TLinkType } from "./HeaderModule";

export const links: Array<TLinkType> = [
  {
    title: "Servicios",
    href: "/admin/services",
  },
  {
    title: "Packs",
    href: "/admin/packs",
    disabled: true,
  },
  {
    title: "FAQ",
    href: "/admin/faq",
    disabled: true,
  },
  {
    title: "Contacto",
    href: "/admin/contact",
    disabled: true,
  },
];

type HeaderAdminModulePropsType = {};

const HeaderAdminModule: React.FC<HeaderAdminModulePropsType> = ({}) => {
  return (
    <header
      data-test-id="header_admin_module"
      className="sticky top-0 left-0 z-50 max-h-[84px] w-full"
    >
      <div className="hidden md:block">
        <HeaderDesktop
          links={links}
          actions={
            <Form action="/logout" method="post">
              <Button>Log Out</Button>
            </Form>
          }
        />
      </div>
      <div className="block md:hidden">
        <HeaderMobile links={links} />
      </div>
    </header>
  );
};

export default HeaderAdminModule;
