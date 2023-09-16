import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useGetTopMoviesQuery } from "../redux/services/movieApi";
import { useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { limitPagination } from "../const/limitPagination";
import PaginationNumber from "../components/PaginationNumber";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SearchForm from "../components/Form/SearchForm";

function MovieList() {
  const { id } = useParams();
  const [page, setPage] = useState(parseInt(id));
  const { data, isError } = useGetTopMoviesQuery({ id: page });

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <SearchForm searchInfo={"Movies"} />
      <section className="flex items-center justify-between gap-3 px-10 mb-1">
        {page > 1 && (
          <PaginationNumber
            number={<AiOutlineArrowLeft />}
            present={false}
            action={() => setPage(page - 1)}
          />
        )}
        <PaginationNumber number={page} present={true} />
        {page < limitPagination && (
          <PaginationNumber
            number={<AiOutlineArrowRight />}
            present={false}
            action={() => setPage(page + 1)}
          />
        )}
      </section>
      {isError ? (
        <div>Error al cargar datos</div>
      ) : (
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-auto px-10">
          {data ? (
            data.map((movie) => <Card data={movie} key={movie.id} />)
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
}

export default MovieList;
