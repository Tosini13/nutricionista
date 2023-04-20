import { StarGained, StarNotGained } from "../icons";
import Paragraph from "../sections/Paragraph";
import { ReviewType } from "./types";

type ReviewTilePropsType = {
  review: ReviewType;
};

const ReviewTile: React.FC<ReviewTilePropsType> = ({ review }) => {
  return (
    <a
      data-testid="review_tile"
      className="flex h-full cursor-pointer flex-col space-y-4 rounded-xl border border-[#DDDDDD] p-8 transition-all duration-300 highlight-none hover-hover:hover:border-primary"
      href={review.review_url}
      target="_blank"
    >
      <Paragraph className="font-medium leading-none">
        {review.author_name}
      </Paragraph>
      <div className="flex items-center">
        {Array.from(Array(review.rating)).map((_, i) => (
          <StarGained key={i} />
        ))}
        {Array.from(Array(5 - review.rating)).map((_, i) => (
          <StarNotGained key={i} />
        ))}
      </div>
      <Paragraph className="grow leading-normal webkit-line-clamp-5">
        {review.text}
      </Paragraph>
      <Paragraph className="font-medium leading-none">
        {review.relative_time_description}
      </Paragraph>
    </a>
  );
};

export default ReviewTile;
