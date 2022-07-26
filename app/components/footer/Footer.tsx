import logo from "../../../public/logoWithWhiteTitle.svg";
import dinner from "../../../public/images/footer/dinner.png";
import cooking from "../../../public/images/footer/cooking.png";
import cooking2 from "../../../public/images/footer/cooking2.png";
import meal from "../../../public/images/footer/meal.png";
import Paragraph from "../sections/Paragraph";
import SocialBar from "../SocialBar";

type TFooterProps = {};

const Footer: React.FC<TFooterProps> = () => {
  return (
    <footer className="mainBgColor mt-10 text-white">
      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="triangle"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#74B463"
        >
          <defs>
            <linearGradient id="triangleGradient">
              <stop offset="0%" stopColor="#316A23" />
              <stop offset="100%" stopColor="#2A7218" />
            </linearGradient>
          </defs>
          <polygon points="0 100 100 0 100 100" fill="url(#triangleGradient)" />
        </svg>
        <div className="headerContent">
          <div className="relative flex flex-wrap items-stretch justify-around space-y-6 py-10 md:mx-24 md:items-center">
            <address className="flex min-w-max basis-full flex-col items-center text-center not-italic sm:block sm:basis-auto sm:text-left md:mx-4">
              <img src={logo} alt={"logo"} />
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
              <h6 className="hidden pb-6 md:block">Mapa del sitio</h6>
              <ul>
                <MapLink href="#home" title="home" />
                <MapLink href="#sobreMi" title="sobre mi" />
                <MapLink href="#servicios" title="servicios" />
                <MapLink href="#packs" title="packs" />
                <MapLink href="#faq" title="FAQ" />
                <MapLink href="#contacto" title="contacto" />
              </ul>
            </div>
            <div className="flex flex-col items-center justify-evenly lg:hidden">
              <SocialBar />
            </div>
            <div className="hidden min-w-max py-8 md:flex">
              <div>
                <img src={cooking2} alt="cooking" />
              </div>
              <div className="mx-2">
                <div className="mb-2">
                  <img src={dinner} alt="dinner" />
                </div>
                <div>
                  <img src={meal} alt="meal" />
                </div>
              </div>
              <div>
                <img src={cooking} alt="cooking" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center space-x-4 p-3 text-sm"
        style={{ backgroundColor: "#123708" }}
      >
        <h6 className="order-last mt-2 min-w-full text-center md:order-first md:mt-0 md:min-w-max">
          Copyright 2022 by Esther Zamora All rights reserved
        </h6>
        <div className="h-{50} hidden border-r border-white md:block" />
        <h6>Crafted by Bartosik Bros</h6>
      </div>
    </footer>
  );
};

export default Footer;

type TMapLinkmProps = {
  title: string;
  href: string;
};

const MapLink: React.FC<TMapLinkmProps> = ({ title, href }) => {
  return (
    <li className="pb-6 last:pb-0 md:pb-2">
      <a
        className="border-b border-current"
        href={href}
        style={{ fontWeight: 400 }}
      >
        {title}
      </a>
    </li>
  );
};
