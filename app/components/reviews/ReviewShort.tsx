import { GoogleIcon, StarGained } from "../icons";
import Paragraph from "../sections/Paragraph";
import { ReviewType } from "./types";

type ReviewShortPropsType = {
  review: ReviewType;
};

const ReviewShort: React.FC<ReviewShortPropsType> = ({ review }) => {
  return (
    <a
      data-testid="review_short"
      className="flex h-[100px] cursor-pointer items-center rounded-xl bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
      href={review.review_url}
      target="_blank"
    >
      <img src={review.author_url} alt="review author's photo" />
      <div className="ml-2 flex h-full flex-col justify-between">
        <Paragraph className="font-medium leading-none">
          {review.author_name}
        </Paragraph>
        <Paragraph className="font-extralight leading-none">
          {new Date(review.time).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "short",
          })}
        </Paragraph>
        <div className="flex items-center space-x-1">
          <StarGained />
          <Paragraph className="font-medium leading-tight">
            {review.rating.toFixed(1)}
          </Paragraph>
          <GoogleIcon />
        </div>
      </div>
    </a>
  );
};

export default ReviewShort;
