import FooterLink from "~/components/FooterLink";
import Logo from "~/components/Logo";
import Paragraph from "~/components/sections/Paragraph";
import SocialBar from "~/components/SocialBar";
import { links } from "./HeaderModule";
import { SERVICES } from "./ServicesModule";

type FooterModulePropsType = {};

const FooterModule: React.FC<FooterModulePropsType> = ({}) => {
  return (
    <footer data-test-id="footer_module" className="bg-[#56383E] text-white">
      <div className="relative mx-auto max-w-theme px-2">
        <div className="relative flex flex-col flex-wrap justify-between space-y-12 py-10 md:flex-row md:space-y-0">
          <address className="flex min-w-max basis-full flex-col items-center space-y-8 text-center not-italic sm:block sm:basis-auto sm:text-left md:mx-4">
            <a href="/#home">
              <Logo secondary />
            </a>
            <Paragraph className="mt-6">
              <span className="font-semibold md:font-normal">
                Numero de telefono:
              </span>
              <br />
              <span className="md:font-semibold">+34 601 53 36 64</span>
            </Paragraph>
            <Paragraph className="mt-6">
              <span className="font-semibold md:font-normal">
                Correo electronico:
              </span>
              <br />
              <a className="md:font-semibold" href="mailto:Esther@gmail.com">
                nutricionez@gmail.com
              </a>
            </Paragraph>
          </address>
          <div className="ml-4 sm:min-w-max md:mx-4">
            <h6 className="pb-6 text-center font-semibold md:text-left">
              Mapa del sitio
            </h6>
            <ul className="flex flex-row flex-wrap justify-around md:flex-col">
              {links.map((link) => (
                <li
                  key={`${link.href}${link.title}`}
                  className="mx-4 my-3 pb-6 last:pb-0 md:mx-0 md:my-0 md:mb-2.5 md:pb-2"
                >
                  <FooterLink href={link.href} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-4 hidden sm:min-w-max md:mx-4 md:block">
            <h6 className="pb-6">Servicios</h6>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.id} className="mb-2.5 pb-6 last:pb-0 md:pb-2">
                  <FooterLink
                    href={`/services/${service.id}`}
                    title={service.title}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center justify-evenly md:flex-col">
            <SocialBar />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-[#3C282C] p-3 text-sm text-primary md:space-x-4">
        <h6 className="order-last mt-2 min-w-full text-center md:order-first md:mt-0 md:min-w-max">
          Copyright 2022{" "}
          <span className="hidden md:inline">
            by Esther Zamora All rights reserved
          </span>
        </h6>
        <div className="h-{50} hidden border-r border-primary md:block" />
        <h6>Crafted by Bartosik Bros</h6>
      </div>
    </footer>
  );
};

export default FooterModule;
