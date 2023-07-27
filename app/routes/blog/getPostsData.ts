import { json, LoaderArgs } from "@remix-run/node";
import { PostType } from ".";
/**
 * @description
 * for now posts have to be imported manually here
 *  */
import * as perderPeso from "./posts/perder-peso-perder-grasa.md";
import * as glucose from "./posts/glucose-levels-recommendations.md";

const BLOG_IMAGES_URL = "/img/blog";

const postsFiles = [perderPeso, glucose];

export type PostMetaType = PostType;

function notNull(post: PostType | null): post is PostType {
  return post !== null;
}

function postFromModule(mod: {
  filename: string;
  attributes: {
    meta: PostMetaType;
  };
}): PostType | null {
  if (!mod?.attributes?.meta) return null;

  return {
    ...mod.attributes.meta,
    id: mod.filename.replace(/\.mdx?$/, ""),
  };
}

const postsData = postsFiles
  .map((file) => postFromModule(file))
  .filter(notNull)
  .map((post) => ({
    ...post,
    imgSrc: `${BLOG_IMAGES_URL}/${post.imgSrc}`,
  }));

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  return json(id ? postsData.find((data) => data.id === id) : postsData);
}
