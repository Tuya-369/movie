import { PlayIcon, StarIcon } from "lucide-react";

export const MovieCarouselItem = ({ movie }) => {
  return (
    <div className="w-full max-w-[1080px] mx-auto mt-20">
      <div className="relative">
        <img 
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="w-full h-[400px] md:h-[524px] object-cover rounded-xl"
          alt={movie?.title}
        />
        <button className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition shadow-lg">
          <PlayIcon className="w-5 h-5" /> Watch Trailer
        </button>
      </div>
    </div>
  );
};
