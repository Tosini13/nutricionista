import { Outlet, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { PostType } from ".";
import SectionTitle from "~/components/sections/SectionTitle";
import Paragraph from "~/components/sections/Paragraph";
import { formatDate } from "~/utils/formatDate";
import HeaderModule from "~/modules/HeaderModule";
import FooterModule from "~/modules/FooterModule";
import { Button, ButtonLink } from "~/components/form/Button";
import LatestPostsModule from "~/modules/LatestPostsModule";
import Section from "~/components/sections/Section";
import estherWebP from "../../../public/img/esther/esther_web_bg.webp";
import { ArrowLeftIcon } from "~/components/icons";

export type LoaderData =
  | {
      status: "success";
      post: PostType;
      latestPosts: PostType[];
    }
  | {
      status: "error";
      error: string;
    };

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);

  const sections = url.pathname.split("/");

  const postId = sections[sections.length - 1];

  if (!postId) {
    return json<LoaderData>({
      status: "error",
      error: `No post with id: "${postId}"`,
    });
  }

  const postsData: PostType[] = await fetch(
    `${url.origin}/blog/getPostsData`
  ).then((res) => res.json());

  const post = postsData.find(({ id }) => id === postId);

  if (!post) {
    return json<LoaderData>({
      status: "error",
      error: `No post with id: "${postId}"`,
    });
  }

  return json<LoaderData>({
    status: "success",
    post,
    latestPosts: postsData.slice(0, 4),
  });
};

const BlogPage: React.FC = () => {
  const data = useLoaderData() as LoaderData;

  if (data.status === "error") {
    return <p>{data.error}</p>;
  }

  return (
    <>
      <HeaderModule />
      <main className="relative min-h-screen max-w-none">
        <Section id="post_content" className="max-w-3xl md:mx-auto">
          <SectionTitle>{data.post?.title}</SectionTitle>
          <Paragraph className="font-medium text-secondary">
            {formatDate(data.post?.date)}
          </Paragraph>
          <Paragraph className="font-normal  text-gray">
            Written by: <span className="font-medium">{data.post?.author}</span>{" "}
            / 9 min. reading
          </Paragraph>
          <img
            src={data.post.imgSrc}
            alt="post image"
            className="my-10 w-full rounded-3xl"
          />
          <Outlet />
        </Section>

        <div className="mx-auto w-full max-w-3xl border-b border-primary-light" />
        <Section
          id="see_more"
          className="max-w-3xl overflow-x-visible md:mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Paragraph className="mt-8 text-4xl font-semibold leading-snug">
                ¿Quieres empezar a{" "}
                <span className="text-secondary">
                  cuidar tu salud y tu cuerpo
                </span>
                ? Descubre cómo puedes lograr este objetivo conmigo.
              </Paragraph>
              <ButtonLink
                className="group mx-auto mt-4 w-full sm:w-fit md:ml-0"
                href="/"
              >
                Ver mas
                <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
              </ButtonLink>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={estherWebP}
                alt="Esther"
                className="mx-auto w-full max-w-sm lg:-mr-24"
              />
            </div>
          </div>
        </Section>
        <Section
          id="latestPosts"
          className="mx-0 max-w-none bg-primary-light px-4"
        >
          <div className="mx-2 max-w-screen-xl md:mx-auto">
            <LatestPostsModule latestPosts={data.latestPosts} />
          </div>
        </Section>
      </main>
      <FooterModule />
    </>
  );
};

export default BlogPage;
