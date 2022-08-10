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
      <div className="mx-24 flex justify-between py-10">
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
      <div
        className="flex justify-center p-3"
        style={{ backgroundColor: "#123708" }}
      >
        <h6>Copyright 2022 by Esther Zamora All rights reserved</h6>
        <a href="#privacy">Privacy</a>
        <a href="#privacy">Privacy</a>
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
