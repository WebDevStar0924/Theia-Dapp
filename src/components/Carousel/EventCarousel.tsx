import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ReactNode } from "react";
import "./styles.scss";

interface iProps {
  items: ReactNode[];
  responsive: ResponsiveType;
}

const CustomRightArrow = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  // return <div className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={() => onClick()} ></div>;
  return (
    <div
      className="event-carousel-container event-carousel--right"
      onClick={() => onClick()}
    >
      <div className="event-carousel">
        <FaChevronRight color={"white"} />
      </div>
    </div>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  // return <div className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={() => onClick()} ></div>;
  return (
    <div
      className="event-carousel-container event-carousel--left"
      onClick={() => onClick()}
    >
      <div className="event-carousel">
        <FaChevronLeft color={"white"} />
      </div>
    </div>
  );
};

export default function EventCarousel(props: iProps) {
  const { items, responsive } = props;
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      customRightArrow={<CustomRightArrow onClick={() => { }} />}
      customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {items}
    </Carousel>
  );
}
