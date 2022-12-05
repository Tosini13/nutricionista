import insta_icon from "../../public/images/media/insta_icon.svg";
import whatsapp_icon from "../../public/images/media/whatsapp_icon.svg";

type TSocialBarProps = {
  mode?: "dark" | "light";
};

const SocialBar: React.FC<TSocialBarProps> = ({ mode = "light" }) => {
  const classNameImg = mode === "dark" ? "invert" : undefined;
  return (
    <>
      <a
        href="https://instagram.com/ez.nutricion?igshid=YmMyMTA2M2Y="
        target={"_blank"}
        rel="noreferrer"
      >
        <img
          className={classNameImg}
          src={insta_icon}
          alt="instagram icon"
          width={70}
          height={70}
        />
      </a>
      <a href="https://wa.me/34601533664" target={"_blank"} rel="noreferrer">
        <img
          className={classNameImg}
          src={whatsapp_icon}
          alt="WhatsApp icon"
          width={70}
          height={70}
        />
      </a>
    </>
  );
};

export default SocialBar;
