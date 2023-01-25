import type { CardIndividualType, CardType } from "~/modules/PacksModule";
import PackFeatureList from "./PackFeatureList";
import PackPrice from "./PackPrice";
import PackHeader from "./PackHeader";
import PackFooter from "./PackFooter";
import PackContainer from "./PackContainer";

type PackPropsType = CardType;

const Pack: React.FC<PackPropsType> = ({
  title,
  price,
  offer,
  features,
  recommended,
  duration,
}) => {
  return (
    <PackContainer testId="pack" recommended={recommended}>
      <div className="flex h-full flex-col space-y-4">
        <div className="grid auto-rows-fr space-y-1">
          <PackHeader title={title} />
          <PackPrice price={price} offer={offer} />
        </div>
        <div className="flex-grow">
          <PackFeatureList duration={duration} features={features} />
        </div>
        <PackFooter recommended={recommended} />
      </div>
    </PackContainer>
  );
};

export default Pack;

type PackIndividualPropsType = CardIndividualType;

export const PackIndividual: React.FC<PackIndividualPropsType> = ({
  title,
  recommended,
  visits,
}) => {
  return (
    <PackContainer testId="pack_individual" recommended={recommended}>
      <div className="flex h-full flex-col space-y-4">
        <PackHeader title={title} />
        <div className="flex-grow space-y-4 pt-10">
          {visits.map((visit) => (
            <div key={visit.id} className="space-y-3">
              <h4 className="text-center font-semibold">{visit.title}</h4>
              <PackPrice price={visit.price} offer={visit.offer} />
            </div>
          ))}
        </div>
        <PackFooter recommended={recommended} />
      </div>
    </PackContainer>
  );
};
