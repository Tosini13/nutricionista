import Paragraph from "~/components/sections/Paragraph";
import SectionTitle from "~/components/sections/SectionTitle";
import { PostType } from "~/routes/blog";

type PostModulePropsType = {
  post: PostType;
};

const PostModule: React.FC<PostModulePropsType> = ({ post }) => {
  return (
    <div data-testid="post_module">
      <SectionTitle>{post.title}</SectionTitle>
      <Paragraph>{post.category}</Paragraph>
    </div>
  );
};

export default PostModule;
