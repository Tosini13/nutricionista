import Paragraph from "../sections/Paragraph";
import { formatDate } from "~/utils/formatDate";
import { twMerge } from "tailwind-merge";
import { PostType } from "~/routes/blog";

type PostTilePropsType = {
  className?: string;
  post: PostType;
};

const PostTile: React.FC<PostTilePropsType> = ({ post, className }) => {
  return (
    <div
      data-testid="post_tile"
      className={twMerge(
        "group flex flex-col space-y-2 overflow-hidden rounded-xl transition-all duration-300 hover:bg-primary-light min-h-[250px]",
        className
      )}
    >
      <div className="aspect-video shadow-lg rounded-xl overflow-hidden w-full">
        <img
          src={post.imgSrc}
          alt={`${post.title} image`}
          className="w-full h-full shadow-lg transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex grow flex-col p-2">
        <h3 className="grow" data-role="title">
          {post.title}
        </h3>
        <Paragraph className="text-gray">{formatDate(post.date)}</Paragraph>
      </div>
    </div>
  );
};

export default PostTile;
