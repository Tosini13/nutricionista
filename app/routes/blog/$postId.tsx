import { useLoaderData, useParams } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import PostModule from "~/modules/PostModule";
import { PostType } from ".";
import mockPostsData from "~/data/mockLatestPosts.json";

export type LoaderData = {
  post?: PostType;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  console.log("params !log!", params);

  return json<LoaderData>({
    post: mockPostsData.find((post) => post.id === params.postId),
  });
};

const Post: React.FC = () => {
  const { post } = useLoaderData() as LoaderData;

  console.log("post !log!", post);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div data-testid="post">
      <PostModule post={post} />
    </div>
  );
};

export default Post;
