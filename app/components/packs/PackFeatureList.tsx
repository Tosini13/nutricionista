import type { CardType } from "~/modules/PacksModule";
import Paragraph from "../sections/Paragraph";
import circleOkIcon from "../../../public/img/icons/circle_ok.svg";

type PackFeatureListPropsType = {
  duration?: CardType["duration"];
  features: CardType["features"];
};

const PackFeatureList: React.FC<PackFeatureListPropsType> = ({
  features,
  duration,
}) => {
  return (
    <ul className="space-y-2" data-test-id="pack_feature_list">
      {duration && (
        <li className="flex items-center">
          <img
            src={circleOkIcon}
            alt="circle ok icon"
            className="mr-3"
            width="19px"
            height="20px"
          />
          <Paragraph className="font-bold leading-6 text-[#7E70B6]">
            {duration}
          </Paragraph>
        </li>
      )}
      {features.map((feature) => (
        <li key={feature.id} className="flex items-center">
          <img
            src={circleOkIcon}
            alt="circle ok icon"
            className="mr-3"
            width="19px"
            height="20px"
          />
          <Paragraph className="font-semibold leading-6">
            {feature.title}
          </Paragraph>
        </li>
      ))}
    </ul>
  );
};

export default PackFeatureList;
