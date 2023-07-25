import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";
import LatestPostsModule from "~/modules/LatestPostsModule";
import mockPostsData from "~/data/mockLatestPosts.json";
import NewestPostModule from "~/modules/NewestPostModule";
import Section from "~/components/sections/Section";
import PostsModule from "~/modules/PostsModule";
import AboutMeBlogModule from "~/modules/AboutMeBlogModule";

export type PostCategory = {
  title: string;
};

export type PostType = {
  id: string;
  title: string;
  date: string;
  imgSrc: string;
  category: string;
  author: string;
};

export type LoaderData = {
  postsData: PostType[];
  categories: PostCategory[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const postsData = await fetch(`${url.origin}/blog/getPostsData`).then((res) =>
    res.json()
  );

  return json<LoaderData>({
    categories: [...new Set(mockPostsData.map(({ category }) => category))].map(
      (category) => ({ title: category })
    ),
    postsData,
  });
};

type BlogPropsType = {};

const Blog: React.FC<BlogPropsType> = ({}) => {
  const { postsData } = useLoaderData() as LoaderData;

  const categories = [
    ...new Set(postsData.map(({ category }) => category)),
  ].map((category) => ({ title: category }));

  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <Section id="newestPost" className="mt-6">
          <NewestPostModule post={postsData[0]} />
        </Section>
        <Section
          id="latestPosts"
          className="mx-0 max-w-none bg-primary-light px-4"
        >
          <div className="mx-2 max-w-screen-xl md:mx-auto">
            <LatestPostsModule latestPosts={postsData.slice(0, 4)} />
          </div>
        </Section>
        <Section id="aboutMe">
          <AboutMeBlogModule />
        </Section>
        {categories.length > 1 && (
          <Section id="allPosts">
            <PostsModule
              categories={categories}
              posts={postsData}
              hasNext={false}
            />
          </Section>
        )}
      </main>
      <FooterModule />
    </>
  );
};

export default Blog;
