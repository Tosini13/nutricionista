import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";
import mockBlogImg from "public/img/blog/blog_mock_image.webp";
import LatestPostsModule from "~/modules/LatestPostsModule";
import mockPostsData from "~/data/mockLatestPosts.json";
import NewestPostModule from "~/modules/NewestPostModule";
import Section from "~/components/sections/Section";
import PostsModule from "~/modules/PostsModule";
import AboutMeBlogModule from "~/modules/AboutMeBlogModule";
import * as firstArticle from "./my-first-article.md";

type PostMetaType = Pick<PostType, "title" | "category">;

export type PostCategory = {
  title: string;
};

export type PostType = {
  id: string;
  title: string;
  date: string;
  imgSrc: string;
  category: string;
};

export type LoaderData = {
  newPost: PostType;
  posts: PostType[];
  categories: PostCategory[];
  data: (PostMetaType & { slug: string }) | null;
};

function postFromModule(mod: {
  filename: string;
  attributes: {
    meta: PostMetaType;
  };
}): (PostMetaType & { slug: string }) | null {
  console.log("mod !log!", typeof mod);

  if (!mod?.attributes?.meta) return null;

  const { title, category } = mod.attributes.meta;

  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    title,
    category,
  };
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);

  console.log("typeof firstArticle !log!", typeof firstArticle);

  return json<LoaderData>({
    newPost: { ...mockPostsData[0], imgSrc: mockBlogImg },
    posts: mockPostsData.map((post) => ({ ...post, imgSrc: mockBlogImg })),
    categories: [...new Set(mockPostsData.map(({ category }) => category))].map(
      (category) => ({ title: category })
    ),
    data: postFromModule(firstArticle),
  });
};

type BlogPropsType = {};

const Blog: React.FC<BlogPropsType> = ({}) => {
  const { newPost, posts, categories, data } = useLoaderData() as LoaderData;

  console.log("data !log!", data);
  console.log("data.title !log!", data?.title);
  console.log("data.category !log!", data?.category);

  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <Section id="newestPost" className="mt-6">
          <NewestPostModule post={newPost} />
        </Section>
        <Section
          id="latestPosts"
          className="mx-0 max-w-none bg-primary-light px-4"
        >
          <div className="mx-2 max-w-screen-xl md:mx-auto">
            <LatestPostsModule latestPosts={posts.slice(0, 4)} />
          </div>
        </Section>
        <Section id="aboutMe">
          <AboutMeBlogModule />
        </Section>
        <Section id="allPosts">
          <PostsModule
            categories={
              data?.category
                ? [...categories, { title: data.category }]
                : categories
            }
            posts={posts}
            hasNext={false}
          />
        </Section>
      </main>
      <FooterModule />
    </>
  );
};

export default Blog;
