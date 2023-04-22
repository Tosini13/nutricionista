import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";
import Section from "~/components/sections/Section";
import { reviews } from "~/data/reviewsData.json";
import SectionTitle from "~/components/sections/SectionTitle";
import { useState } from "react";
import ReviewTile from "~/components/reviews/ReviewTile";
import ArrowsNavigation from "~/components/slider/ArrowNavigation";

const SLIDER_BREAK_POINTS: SwiperOptions["breakpoints"] = {
  1: {
    slidesPerView: 1.2,
    centeredSlides: true,
  },
  380: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  1024: {
    slidesPerView: 3.3,
    centeredSlides: false,
    pagination: {
      el: null,
    },
  },
};

const INITIAL_SLIDE = 0;

type ReviewsModulePropsType = {};

const ReviewsModule: React.FC<ReviewsModulePropsType> = ({}) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <Section data-test-id="reviews_module" className="space-y-12">
      <SectionTitle className="text-center">
        Recomendaciones <span className="text-secondary">de mis pacientes</span>
      </SectionTitle>
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          breakpoints={SLIDER_BREAK_POINTS}
          pagination
          className="swiper-reviews pb-[50px]"
          initialSlide={INITIAL_SLIDE}
          onRealIndexChange={({ isBeginning, isEnd }) => {
            setIsFirstSlide(isBeginning);
            setIsLastSlide(isEnd);
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={`${review.author_name}-${review.time}`}
              className="h-auto"
            >
              <ReviewTile review={review} />
            </SwiperSlide>
          ))}
          <div className="hidden lg:block">
            <ArrowsNavigation
              firstSlide={isFirstSlide}
              lastSlide={isLastSlide}
            />
          </div>
        </Swiper>
      </div>
    </Section>
  );
};

export default ReviewsModule;
