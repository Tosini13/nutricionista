import { useEffect, useRef, useState } from "react";
import PostTile from "~/components/blog/PostTile";
import { Button } from "~/components/form/Button";
import Paragraph from "~/components/sections/Paragraph";
import SectionTitle from "~/components/sections/SectionTitle";
import { PostCategory, PostType } from "~/routes/blog";
import { getBlogImage } from "~/utils/assets";
import { formatDate } from "~/utils/formatDate";

type PostsNavPropsType = {
  tabs: PostCategory[];
  category: string | null;
  onClickCategory: (category: string) => void;
};

const PostsNav: React.FC<PostsNavPropsType> = ({
  tabs,
  category,
  onClickCategory,
}) => {
  const [bar, setBar] = useState({
    width: 0,
    left: 0,
  });
  const ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current && containerRef.current?.offsetLeft) {
      setBar({
        width: ref.current.offsetWidth ?? 0,
        left: ref.current.offsetLeft - containerRef.current.offsetLeft ?? 0,
      });
    }
  }, [ref.current, category]);

  return (
    <div data-testid="posts_nav" className="w-fit" ref={containerRef}>
      <div className="flex gap-x-4">
        {tabs.map((tab) => (
          <h2
            ref={category === tab.title ? ref : undefined}
            key={tab.title}
            className="relative cursor-pointer text-lg font-medium capitalize"
            onClick={() => onClickCategory(tab.title)}
          >
            {tab.title}
          </h2>
        ))}
      </div>
      <div className="mt-2 h-1 w-full bg-primary-light">
        <div
          className="h-full w-4 bg-primary transition-all duration-300"
          style={{
            width: bar.width,
            transform: `translateX(${bar.left}px)`,
          }}
        />
      </div>
    </div>
  );
};

type PostsModulePropsType = {
  categories: PostCategory[];
  posts: PostType[];
  hasNext: boolean;
};

const PostsModule: React.FC<PostsModulePropsType> = ({
  categories,
  posts,
  hasNext,
}) => {
  const [currentTab, setCurrentTab] = useState("all");
  return (
    <div data-testid="posts_module">
      <SectionTitle className="text-left">My articles</SectionTitle>
      <PostsNav
        tabs={[{ title: "all" }, ...categories]}
        category={currentTab}
        onClickCategory={setCurrentTab}
      />
      <div className="mt-10 grid grid-flow-row grid-cols-4 gap-8">
        {posts
          .filter(
            (post) => currentTab === "all" || post.category === currentTab
          )
          .map((post) => (
            <a
              key={post.id}
              href={`/blog/posts/${post.id}`}
              className="block h-full"
            >
              <PostTile post={post} className="h-full" />
            </a>
          ))}
      </div>
      {hasNext && <Button secondary>Ver mas</Button>}
    </div>
  );
};

export default PostsModule;
