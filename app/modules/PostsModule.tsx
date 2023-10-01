import { useEffect, useRef, useState } from "react";
import PostTile from "~/components/blog/PostTile";
import { Button } from "~/components/form/Button";
import SectionTitle from "~/components/sections/SectionTitle";
import { PostCategory, PostType } from "~/routes/blog";
import { AnimatePresence, motion } from "framer-motion";

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
    <div
      data-testid="posts_nav"
      className="w-full overflow-x-auto pb-3"
      ref={containerRef}
    >
      <div className="w-fit">
        <div className="flex gap-x-4 whitespace-nowrap">
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
      <div className="xs:grid-cols-2 mt-10 grid grid-flow-row grid-cols-1 gap-2 overflow-x-auto md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        <AnimatePresence initial={false} mode="wait">
          {posts
            .filter(
              (post) => currentTab === "all" || post.category === currentTab
            )
            .map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <a href={`/blog/posts/${post.id}`} className="block h-full">
                  <PostTile post={post} className="h-full" />
                </a>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      {hasNext && <Button secondary>Ver mas</Button>}
    </div>
  );
};

export default PostsModule;
