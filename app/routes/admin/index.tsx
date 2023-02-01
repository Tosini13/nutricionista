import Paragraph from "~/components/sections/Paragraph";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";
import underline from "../../../public/img/photos/underline.svg";

type AdminMainPagePropsType = {};

const AdminMainPage: React.FC<AdminMainPagePropsType> = ({}) => {
  return (
    <Section data-test-id="admin_main_page">
      <SectionTitle className="text-secondary">
        <span className="relative text-[initial]">
          Edition
          <img
            src={underline}
            alt="underline"
            className="absolute bottom-0 left-0 w-full"
          />
        </span>{" "}
        panel
      </SectionTitle>
      <Paragraph>
        Hola Esther!🖖 Welcome to your editor panel. Here You can manage your
        website. To edition is available few sections. If you need change
        something else, please let us know.😉
      </Paragraph>
    </Section>
  );
};

export default AdminMainPage;
