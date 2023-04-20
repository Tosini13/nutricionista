import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";
import Section from "~/components/sections/Section";
import { reviews } from "../data/reviewsData.json";
import SectionTitle from "~/components/sections/SectionTitle";
import Paragraph from "~/components/sections/Paragraph";
import { ArrowLeftIcon, StarGained, StarNotGained } from "~/components/icons";
import ButtonIcon from "~/components/form/ButtonIcon";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

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

const arrowButtonContainerClassName =
  "opacity-1 transition-all absolute top-0 z-10 flex h-full items-center justify-center bg-white";

const INITIAL_SLIDE = 0;

type ReviewsModulePropsType = {};

const ReviewsModule: React.FC<ReviewsModulePropsType> = ({}) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <Section data-test-id="reviews_module" className="space-y-12">
      <SectionTitle className="text-center">
        Recomendations <span className="text-secondary">of my patients</span>
      </SectionTitle>
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          breakpoints={SLIDER_BREAK_POINTS}
          pagination
          className="swiper-reviews secondary pb-[50px]"
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
              <Review review={review} />
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

type ArrowsNavigationPropsType = {
  firstSlide: boolean;
  lastSlide: boolean;
};

const ArrowsNavigation: React.FC<ArrowsNavigationPropsType> = ({
  firstSlide,
  lastSlide,
}) => {
  const swiper = useSwiper();
  return (
    <>
      <div
        className={twMerge(
          arrowButtonContainerClassName,
          "left-0 shadow-[20px_0px_30px_15px_rgba(255,255,255,1)]",
          firstSlide && "opacity-0"
        )}
      >
        <ButtonIcon
          className="swiper-button-prev-custom cursor-pointer highlight-none"
          icon={<ArrowLeftIcon />}
          onClick={() => swiper.slidePrev()}
        />
      </div>
      <div
        className={twMerge(
          arrowButtonContainerClassName,
          "right-0 shadow-[-20px_0px_30px_15px_rgba(255,255,255,1)]",
          lastSlide && "opacity-0"
        )}
      >
        <ButtonIcon
          className="swiper-button-next-custom cursor-pointer highlight-none"
          icon={<ArrowLeftIcon className="rotate-180" />}
          onClick={() => swiper.slideNext()}
        />
      </div>
    </>
  );
};

type ReviewPropsType = {
  review: typeof reviews[number];
};

const Review: React.FC<ReviewPropsType> = ({ review }) => {
  return (
    <a
      data-testid="review"
      className="flex h-full cursor-pointer flex-col space-y-4 rounded-xl border border-[#DDDDDD] p-8 transition-all duration-300 highlight-none hover-hover:hover:border-primary"
      href={review.review_url}
      target="_blank"
    >
      <Paragraph className="leading-none">{review.author_name}</Paragraph>
      <div className="flex items-center">
        {Array.from(Array(review.rating)).map((_, i) => (
          <StarGained key={i} />
        ))}
        {Array.from(Array(5 - review.rating)).map((_, i) => (
          <StarNotGained key={i} />
        ))}
      </div>
      <Paragraph className="grow leading-normal webkit-line-clamp-5">
        {review.text}
      </Paragraph>
      <Paragraph className="leading-none">
        {review.relative_time_description}
      </Paragraph>
    </a>
  );
};
