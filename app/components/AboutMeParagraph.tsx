import type { MyInfo } from "~/modules/AboutMeModule";
import Paragraph from "./sections/Paragraph";

type AboutMeParagraphPropsType = MyInfo;

const AboutMeParagraph: React.FC<AboutMeParagraphPropsType> = ({
  iconUrl,
  description,
}) => {
  return (
    <div data-test-id="about_me_paragraph" className="space-y-4">
      <img src={iconUrl} alt="icon" />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default AboutMeParagraph;
