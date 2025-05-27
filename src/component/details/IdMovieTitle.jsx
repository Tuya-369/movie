import { StarIcon } from "lucide-react";
import Link from "next/link";

export const Title = ({ movie }) => {
  return (
    <div className="mt-6 px-4 flex justify center  ">
      <h1 className="text-4xl font-semibold">{movie?.title}</h1>
      <p className="mt-2 text-gray-600">{movie?.release_date}</p>
      <div className="flex items-center gap-2 mt-2 text-yellow-500">
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <p>{movie?.vote_average}</p>
      </div>
    </div>
  );
};
