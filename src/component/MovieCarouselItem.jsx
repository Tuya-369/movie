import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Page } from "../pages/details/[movieId]";
import { MovieTrailer } from "./MovieTrailer";
export const MovieCarouselItem = ({ movie }) => {
  return (
    <div className="">
      <div className=" w-full  w-[800px] md:flex md:relative ">
        <Link href={`/details/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className="h-[246px]  md:h-[600px] w-full "
          />
        </Link>
        <div className="w-[375px] h-[264px] p-2 md:absolute  md:w-[404px] md:h-[264px] md:py-[140px] md:px-[60px]">
          <div className="flex justify-between p-2 md:flex-col">
            <div className="md:text-white">
              <p className="text-sm ">Now Playing:</p>
              <h3 className="text-2xl font-bold">{movie.title}</h3>
            </div>
            <div className="flex">
              <StarIcon className="text-yellow-300 fill-yellow-300 " />
              <p className="w-[36] h-[16] pl-6px text-lg md:text-white">
                {movie?.vote_average}
              </p>
            </div>
          </div>
          <div className="md:text-white md:w-[302px] md:[80px] pt-4">
            <p>{movie.overview}</p>
            <div className="flex  p-4">
              <button>
                <MovieTrailer movieId={movie.id} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
