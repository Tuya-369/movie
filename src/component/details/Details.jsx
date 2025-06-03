import { Frame } from "./Frame";
import { DirectorName } from "./DetailsName";
import { Title } from "./IdMovieTitle";
import { MoreMovie } from "./MoreMovie";
import { DetailButton } from "./DetalsButton";

export const Details = ({ movie }) => {
  return (
    <div className="px-[120px] max-w-[1440px] mx-auto mt-10">
      <Title movie={movie} />
      <Frame movie={movie} />
      <div className="my-6">
        <DetailButton movie={movie} />
        <p className="text-gray-700 text-[16px] my-4">{movie?.overview}</p>
        <DirectorName movie={movie} />
      </div>
      <MoreMovie movie={movie} />
    </div>
  );
};
