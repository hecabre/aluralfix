import { IMAGES_PATH } from "../../const/imagesPath";
import Button from "../Button";

function MovieCard({ movie }) {
  const isSmallScreen = window.innerWidth <= 640;

  const limitedOverview = isSmallScreen
    ? movie.overview.slice(0, 100) + (movie.overview.length > 100 ? "..." : "")
    : movie.overview;

  return (
    <section className="relative h-2/3">
      <div className="absolute lg:bottom-10 -bottom-20 sm:-bottom-10 md:bottom-0 sm:left-20 p-2 z-10 left-10">
        <div className="flex flex-col lg:gap-5 gap-3">
          <p className="text-white lg:text-4xl md:text-2xl sm:text-xl text-base font-nunito">
            {movie.title}
          </p>
          <div className="w-3/4 h-1/2 overflow-hidden">
            <p className="lg:text-lg md:text-base text-sm text-white font-nunito">
              {limitedOverview}
            </p>
          </div>
          <Button type={"blur"} size={"large"} hasBorder={false}>
            Details
          </Button>
        </div>
      </div>
      <img
        className="w-full opacity-50"
        src={`${IMAGES_PATH}${movie.backdrop_path}`}
        alt={movie.title}
      />
    </section>
  );
}

export default MovieCard;
