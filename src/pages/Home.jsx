import { useGetTopMoviesQuery } from "../redux/services/movieApi";
import Loader from "../components/Loader";
import CarouselParallax from "../components/Carousels/CarouselParallax";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useGetTopSeriesQuery } from "../redux/services/movieApi";
import Carousel from "../components/Carousels/Carousel";
import { SwiperSlide } from "swiper/react";
import AnimatedTabs from "../components/AnimatedTabs";

function Home() {
  const { data, isError, isFetching } = useGetTopMoviesQuery({ id: 1 });
  const {
    data: serieData,
    isError: seriesError,
    isFetching: serieLoading,
  } = useGetTopSeriesQuery({ id: 1 });

  if (isFetching) return <Loader />;
  if (serieLoading) return <Loader />;
  return (
    <>
      <Navbar />
      <div className="w-full h-1/2 ">
        {data ? <CarouselParallax data={data} /> : <Loader />}
      </div>
      <section className="p-10 overflow-x-scroll">
        <AnimatedTabs />
        <Carousel>
          {serieData &&
            serieData.map((serie) => (
              <SwiperSlide key={serie.id} className="w-1/2">
                <Card data={serie} />
              </SwiperSlide>
            ))}
        </Carousel>
      </section>
    </>
  );
}

export default Home;
