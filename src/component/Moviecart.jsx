import { Star } from "lucide-react";
export const Moviecart = ({ movie }) => {
  return (
    <div className="w-fit">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className="h-[229px] w-[390px] rounded-t-lg md:h-[340px] md:w-[230px]"
      ></img>
      <div className="w-[158px] bg-gray-300 rounded-b-lg  md:w-[230px]">
        <div className="flex p-2">
          <Star className="text-yellow-300 fill-yellow-300 " />
          <p className="w-[36] h-[16] pl-6px">7</p>
          <p className="text-gray-500">{movie?.vote_average}</p>
        </div>
        <div>
          <p className=" h-[40px] text-[14px] font-normal pl-2">
            {movie?.title}
          </p>
        </div>
      </div>
    </div>
  );
};
