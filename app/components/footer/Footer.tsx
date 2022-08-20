import logo from "../../../public/logo.svg";
import dinner from "../../../public/images/footer/dinner.png";
import cooking from "../../../public/images/footer/cooking.png";
import cooking2 from "../../../public/images/footer/cooking2.png";
import meal from "../../../public/images/footer/meal.png";
import Paragraph from "../sections/Paragraph";

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
        <div className="relative mx-24 flex justify-between py-10">
          <address className="not-italic">
            <img src={logo} alt={"logo"} />
            <Paragraph className="mt-6">
              Numero de telefono:
              <br />
              <span className="fontSemiBold">+48 0000000000</span>
            </Paragraph>
            <Paragraph className="mt-6">
              Correo electronico:
              <br />
              <a className="fontSemiBold" href="mailto:Esther@gmail.com">
                Esther@gmail.com
              </a>
            </Paragraph>
          </address>
          <div>
            <h6 className="pb-6">Mapa del sitio</h6>
            <ul>
              <MapLink href="#home" title="home" />
              <MapLink href="#sobreMi" title="sobre mi" />
              <MapLink href="#servicios" title="servicios" />
              <MapLink href="#packs" title="packs" />
              <MapLink href="#faq" title="FAQ" />
              <MapLink href="#contacto" title="contacto" />
            </ul>
          </div>
          <div className="flex">
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
      <div
        className="flex justify-center space-x-4 p-3 text-sm"
        style={{ backgroundColor: "#123708" }}
      >
        <h6>Copyright 2022 by Esther Zamora All rights reserved</h6>
        <div className="h-{50} border-r border-gray-200" />
        <a href="#privacy">Privacy</a>
        <div className="h-{50} border-r border-gray-200" />
        <a href="#cookies">Cookies</a>
        <div className="h-{50} border-r border-gray-200" />
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
    <li className="pb-2">
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