// import { Swiper, SwiperSlide } from "swiper/react";
// import MovieCard from "../components/Movie/MovieCard";
// import "swiper/css";
// import "swiper/css/effect-cards";

// import { EffectCards } from "swiper/modules";

// function Carousel({ data }) {
//   return (
//     <>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         {data.map((movie, i) => (
//           <SwiperSlide key={i}>
//             <MovieCard movie={movie} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
// export default Carousel;

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MovieCard from "../components/Movie/MovieCard";
import { Parallax, Pagination, Navigation } from "swiper/modules";

function Carousel({ data }) {
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
      >
        {data.map((movie, i) => (
          <SwiperSlide
            key={i}
            className="animate-slideright"
            style={{ width: "25%", height: "auto" }}
          >
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
