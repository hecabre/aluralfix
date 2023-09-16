import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation} from "swiper/modules";

function Carousel({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        speed={900}
        freeMode={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-auto"
      >
        {children}
      </Swiper>
    </>
  );
}

export default Carousel;
