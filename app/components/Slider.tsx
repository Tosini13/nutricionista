import React from "react";
import { twMerge } from "tailwind-merge";

const ITEM_WIDTH = 260;
const ITEM_HEIGHT = 450;
const SPACE_BETWEEN_ITEMS_WIDTH = 10;

type SliderPropsType = {
  items: Array<React.ReactNode>;
  itemWidth?: number;
  itemHeight?: number;
  spaceBetweenWidth?: number;
  secondary?: boolean;
};

const Slider: React.FC<SliderPropsType> = ({
  items,
  itemWidth = ITEM_WIDTH,
  itemHeight = ITEM_HEIGHT,
  spaceBetweenWidth = SPACE_BETWEEN_ITEMS_WIDTH,
  secondary,
}) => {
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const [service, setService] = React.useState(0);
  const [dots, setDots] = React.useState(0);
  const [hasSlider, setHasSlider] = React.useState(false);

  const slideWidth = React.useMemo(
    () => itemWidth + spaceBetweenWidth,
    [itemWidth, spaceBetweenWidth]
  );

  const itemsLength = React.useMemo(
    // test performance!
    () => items.length * slideWidth,
    [items.length, slideWidth]
  );

  const sliderTransform = React.useMemo(() => {
    if (dots === service && dots !== 0) {
      const containerLength = sliderContainerRef.current?.offsetWidth ?? 0;
      console.log("containerLength !log!", containerLength);
      console.log("itemsLength !log!", itemsLength);

      return `translateX(-${itemsLength - containerLength}px)`;
    }
    return `translateX(-${service * slideWidth}px)`;
  }, [service, dots, itemsLength, slideWidth]);

  const dotClassName = React.useCallback(
    (index: number) =>
      twMerge(
        "highlight-none mx-4 h-3 w-3 cursor-pointer rounded-full bg-primary-light hover-hover:hover:bg-secondary transition-bg duration-150",
        secondary ? "bg-secondary-light hover-hover:hover:bg-primary" : "",
        service === index ? (secondary ? "bg-secondary" : "bg-primary") : ""
      ),
    [service, secondary]
  );

  React.useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth && windowWidth < itemsLength) {
        const dotsQtt = Math.floor(
          (itemsLength - windowWidth) / slideWidth + 1
        );

        setDots(dotsQtt);
        setHasSlider(true);
      } else {
        setHasSlider(false);
      }
    };

    handleResize();

    if (typeof window === "undefined") {
      return;
    }

    window?.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemsLength, slideWidth]);

  if (!hasSlider) {
    return (
      <div data-test-id="slider" className="flex justify-between">
        {items.map((item) => (
          <div
            style={{
              width: `${itemWidth}px`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div data-test-id="slider" ref={sliderContainerRef} className="space-y-6">
      <div
        className="relative"
        style={{
          height: `${itemHeight}px`,
        }}
      >
        <div
          className="absolute top-0 left-0 flex justify-between transition-transform duration-150 ease-out"
          style={{
            transform: sliderTransform,
          }}
        >
          {items.map((item) => (
            <div
              className="w-[260px]"
              style={{
                marginRight: `${spaceBetweenWidth}px`,
                width: `${itemWidth}px`,
                height: `${itemHeight}px`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {items.slice(0, dots + 1).map((item, index) => (
          <div
            key={index}
            onClick={() => setService(index)}
            className={dotClassName(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
