import { PlayIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { Page } from "../pages/details/[movieId]";
export const MovieCarouselItem = ({ movie }) => {
  return (
    <div className="w-full">
  <Link href={`/details/${movie.id}`}>
  
        <div className=" md:flex md:relative ">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className="h-[246px]  md:h-[600px] w-full "
          />
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
                <button className="h-[40px] w-[145px] flex  items-center rounded-md bg-black text-white gap-2 md:text-black md:bg-white">
                  {" "}
                  <PlayIcon className="gap-2" /> Watch Trailer{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
