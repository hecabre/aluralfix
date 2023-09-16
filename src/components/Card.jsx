import RankingCircle from "./RankingCircle";
import { IMAGES_PATH } from "../const/imagesPath";

function Card({ data }) {
  const voteAverageString = String(data.vote_average);

  const firstThreeDigits = voteAverageString.slice(0, 3);

  return (
    <section className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer shadow-md text-white font-nunito items-center">
      <div className="z-10">
        <img
          src={data.backdrop_path ? `${IMAGES_PATH}${data.backdrop_path}` : ``}
          alt={data.name}
          className="object-cover max-w-full h-auto rounded-lg"
        />

        <RankingCircle ranking={firstThreeDigits} />
        <p className="font-bold">
          {data.name}
          {data.original_title}
        </p>
        <p className="truncate text-white opacity-40">
          {data.first_air_date}
          {data.release_date} - {data.original_language}
        </p>
      </div>
    </section>
  );
}

export default Card;
