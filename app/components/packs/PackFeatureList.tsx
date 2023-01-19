import type { CardType } from "~/modules/PacksModule";
import Paragraph from "../sections/Paragraph";
import circleOkIcon from "../../../public/img/icons/circle_ok.svg";

type PackFeatureListPropsType = {
  features: CardType["features"];
};

const PackFeatureList: React.FC<PackFeatureListPropsType> = ({ features }) => {
  return (
    <ul className="space-y-2" data-test-id="pack_feature_list">
      {features.map((feature) => (
        <li key={feature.id} className="flex items-center">
          <img src={circleOkIcon} alt="circle ok icon" className="mr-3" />
          <Paragraph className="leading-6">{feature.title}</Paragraph>
        </li>
      ))}
    </ul>
  );
};

export default PackFeatureList;
