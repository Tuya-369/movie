import { StarIcon } from "lucide-react";

export const Title = ({ movie }) => {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold">{movie?.title}</h1>
      <p className="text-gray-500 text-sm mt-1">{movie?.release_date} • PG • 2h 40m</p>
      <div className="flex items-center gap-2 text-yellow-500 mt-2">
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <p className="text-base font-medium">{movie?.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
};
