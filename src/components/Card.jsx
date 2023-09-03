import RankingCircle from "./RankingCircle";
import { IMAGES_PATH } from "../const/imagesPath";

function Card({ data }) {
  return (
    <section className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer shadow-md text-white font-nunito items-center overflow-x-scroll">
      <div className="z-10">
        <img
          src={`${IMAGES_PATH}${data.backdrop_path}`}
          alt={data.name}
          className="object-cover max-w-full h-auto rounded-lg"
        />

        <RankingCircle ranking={data.vote_average} />
        <p className="font-bold">{data.name}</p>
        <p className="truncate text-white opacity-40">
          {data.first_air_date} - {data.original_language}
        </p>
      </div>
    </section>
  );
}

export default Card;
