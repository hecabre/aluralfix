import { useGetTopMoviesQuery } from "../redux/services/movieApi";
import Loader from "../components/Loader";
import CarouselParallax from "../components/Carousels/CarouselParallax";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useGetTopSeriesQuery } from "../redux/services/movieApi";
import Carousel from "../components/Carousels/Carousel";
import { SwiperSlide } from "swiper/react";
import AnimatedTabs from "../components/AnimatedTabs";
import { useSelector } from "react-redux";
import { useGetTrendingQuery } from "../redux/services/movieApi";

function Home() {
  const tabsState = useSelector((state) => state.tabsAnimation);
  const { data, isError, isFetching } = useGetTopMoviesQuery({ id: 1 });
  const {
    data: serieData,
    isError: seriesError,
    isFetching: serieLoading,
  } = useGetTopSeriesQuery({ id: 1 });
  const {
    data: trendingData,
    isError: topError,
    isFetching: topLoading,
  } = useGetTrendingQuery();

  if (isFetching) return <Loader />;
  if (serieLoading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="w-full h-1/2 ">
        {data ? <CarouselParallax data={data} /> : <Loader />}
      </div>
      <section className="p-10">
        <AnimatedTabs />
        <Carousel>
          {tabsState[2].clicked &&
            trendingData.map((data) => (
              <SwiperSlide key={data.id} className="w-1/2">
                <Card data={data} />
              </SwiperSlide>
            ))}
          {tabsState[0].clicked &&
            serieData.map((serie) => (
              <SwiperSlide key={serie.id} className="w-1/2">
                <Card data={serie} />
              </SwiperSlide>
            ))}
          {tabsState[1].clicked &&
            data.map((movie) => (
              <SwiperSlide key={movie.id} className="w-1/2">
                <Card data={movie} />
              </SwiperSlide>
            ))}
        </Carousel>
      </section>
    </>
  );
}

export default Home;
