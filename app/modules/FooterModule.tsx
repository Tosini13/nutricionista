import FooterLink from "~/components/FooterLink";
import Logo from "~/components/Logo";
import Paragraph from "~/components/sections/Paragraph";
import SocialBar from "~/components/SocialBar";
import { links } from "./HeaderModule";
import { services } from "./ServicesModule";

type FooterModulePropsType = {};

const FooterModule: React.FC<FooterModulePropsType> = ({}) => {
  return (
    <footer data-test-id="footer_module" className="bg-[#56383E] text-white">
      <div className="relative mx-auto max-w-theme px-2">
        <div className="relative flex flex-wrap justify-between py-10">
          <address className="flex min-w-max basis-full flex-col items-center text-center not-italic sm:block sm:basis-auto sm:text-left md:mx-4">
            <Logo secondary />
            <Paragraph className="mt-6">
              Numero de telefono:
              <br />
              <span className="font-semibold">+34 601 53 36 64</span>
            </Paragraph>
            <Paragraph className="mt-6">
              Correo electronico:
              <br />
              <a className="font-semibold" href="mailto:Esther@gmail.com">
                nutricionez@gmail.com
              </a>
            </Paragraph>
          </address>
          <div className="ml-4 sm:min-w-max md:mx-4">
            <h6 className="pb-6">Mapa del sitio</h6>
            <ul>
              {links.map((link) => (
                <FooterLink href={link.href} title={link.title} />
              ))}
            </ul>
          </div>
          <div className="ml-4 sm:min-w-max md:mx-4">
            <h6 className="pb-6">Servicios</h6>
            <ul>
              {services.map((service) => (
                <FooterLink
                  href={`/services/${service.id}`}
                  title={service.title}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-evenly">
            <SocialBar />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 bg-[#3C282C] p-3 text-sm text-primary">
        <h6 className="order-last mt-2 min-w-full text-center md:order-first md:mt-0 md:min-w-max">
          Copyright 2022 by Esther Zamora All rights reserved
        </h6>
        <div className="h-{50} hidden border-r border-primary md:block" />
        <h6>Crafted by Bartosik Bros</h6>
      </div>
    </footer>
  );
};

export default FooterModule;
