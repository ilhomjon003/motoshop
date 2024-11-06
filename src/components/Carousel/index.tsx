import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import RecommendCard from "components/Card";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import "swiper/css";
import "swiper/css/navigation";
import { Text } from "components/Text";
import { CardLoader } from "components/Loader";
import { Empty } from "antd";

type props = {
  items: IAdMoto[] | IMotoAd[] | IAdHelmetAndGear[];
  title: string;
  isLoading?: boolean;
};
const Carousel = ({ items, title, isLoading }: props) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const swiperRef = useRef<any>();

  if (isLoading)
    return (
      <div className="carousel__loaders">
        <CardLoader isLoading={isLoading} />
        <CardLoader isLoading={isLoading} />
        <CardLoader isLoading={isLoading} />
        <CardLoader isLoading={isLoading} />
      </div>
    );
  return (
    <div>
      <div className="swiper__nav flex">
        <Text className="section__title" size="lg" bold={600}>
          {title}
        </Text>
        <div className="flex">
          <button
            className="swiper__icon"
            aria-label="ortga qaytarish knopkasi"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <HiOutlineChevronLeft />
          </button>
          <button
            className="swiper__icon"
            aria-label="oldinga o'tkazish knopkasi"
            onClick={() => swiperRef.current.slideNext()}
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>

      <br />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          550: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1224: {
            slidesPerView: 4,
          },
        }}
      >
        {items.length <= 0 && (
          <>
            <Empty description="Hech qanday ma'lumot topilmadi" />
          </>
        )}
        {items.map((card) => (
          <SwiperSlide key={card._id}>
            <RecommendCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;
