import { PlayIcon, StarIcon } from "lucide-react";
import { Button } from "../../../movie/src/components/ui/button";
import { MovieTrailer } from "../movieTrailer";

export const Frame = ({ movie }) => {
  return (
    <div className="w-full max-w-[1080px] mx-auto mt-20">
      <div className="absolute ml-10">
        <MovieTrailer />
      </div>
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className=" relative w-full h-[400px] md:h-[524px] object-cover rounded-xl"
          alt={movie?.title}
        />
        <MovieTrailer className="absolute " />
      </div>
    </div>
  );
};
