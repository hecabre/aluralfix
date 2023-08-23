import { useGetTopMoviesQuery } from "../redux/services/movieApi";
import Loader from "../components/Loader";
import Carousel from "../components/Carousel";

function Home() {
  const { data, isError, isFetching } = useGetTopMoviesQuery({ id: 1 });
  if (isFetching) return <Loader />;
  console.log(data);
  return (
    <div className="w-full h-1/2">
      {data ? <Carousel data={data} /> : <Loader />}
    </div>
  );
}

export default Home;
