import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation} from "swiper/modules";

function Carousel({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        speed={600}
        freeMode={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-1/2"
      >
        {children}
      </Swiper>
    </>
  );
}

export default Carousel;
