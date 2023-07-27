import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PostTile from "~/components/blog/PostTile";
import Paragraph from "~/components/sections/Paragraph";
import SectionTitle from "~/components/sections/SectionTitle";
import { PostType } from "~/routes/blog";
import { getBlogImage } from "~/utils/assets";
import { formatDate } from "~/utils/formatDate";

const SLIDER_BREAK_POINTS = {
  1: {
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
  },
  350: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  580: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  840: {
    slidesPerView: 3,
    centeredSlides: false,
  },
  1100: {
    slidesPerView: 4,
    centeredSlides: false,
  },
};

type LatestPostsModulePropsType = {
  latestPosts: PostType[];
};

const LatestPostsModule: React.FC<LatestPostsModulePropsType> = ({
  latestPosts,
}) => {
  return (
    <div data-testid="latest_posts_module">
      <SectionTitle className="text-primary mx-2">The latest</SectionTitle>
      <div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          breakpoints={SLIDER_BREAK_POINTS}
          pagination={{ clickable: true }}
          className="pb-[50px]"
        >
          {latestPosts.map((post) => (
            <SwiperSlide key={post.id} className="h-auto">
              <a
                className="block h-full highlight-none"
                href={`/blog/posts/${post.id}`}
              >
                <PostTile
                  post={post}
                  className="h-full data-[role=title]:[&_*]:text-lg data-[role=title]:[&_*]:font-bold"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestPostsModule;
