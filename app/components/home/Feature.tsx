import type { FeatureType } from "~/modules/HomeModule";
import Paragraph from "../sections/Paragraph";

type FeaturePropsType = FeatureType;

const Feature: React.FC<FeaturePropsType> = ({
  iconUrl,
  title,
  description,
}) => {
  return (
    <div data-test-id="feature" className="flex items-center space-x-3">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-primary-light">
        <img src={iconUrl} alt="secure icon" width={25} height={25} />
      </div>
      <div className="flex h-full flex-col">
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <Paragraph className="leading-8">{description}</Paragraph>
      </div>
    </div>
  );
};

export default Feature;
