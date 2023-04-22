import type { MyInfo } from "~/modules/AboutMeModule";
import Paragraph from "./sections/Paragraph";

type AboutMeParagraphPropsType = MyInfo;

const AboutMeParagraph: React.FC<AboutMeParagraphPropsType> = ({
  icon,
  description,
}) => {
  return (
    <div data-test-id="about_me_paragraph" className="space-y-4">
      <div className="mx-auto md:ml-0">{icon}</div>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default AboutMeParagraph;
