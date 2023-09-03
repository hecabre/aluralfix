import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MovieCard from "../Movie/MovieCard";
import { Parallax, Pagination, Navigation } from "swiper/modules";

function CarouselParallax({ data, children }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-1/2"
        data-swiper-parallax="-100%"
      >
        {data.map((movie, i) => (
          <SwiperSlide
            key={i}
            className="animate-slideright"
            style={{ width: "25%", height: "auto" }}
          >
            {<MovieCard movie={movie} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default CarouselParallax;
