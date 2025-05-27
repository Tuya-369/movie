import { Frame } from "lucide-react";
import { DirectorName } from "./detailsName";
import { DetailButton } from "./DetalsButton";
import { Title } from "./IdMovieTitle";

export const Details = ({ movie }) => {
  return (
    <div className="ml-[300px] container">
      {/* <Title /> */}
      <Frame movie={movie} />
      <div>
        <div>
          <DetailButton />
        </div>
        <div className=" ">
          <p>{movie.overview}</p>
          <DirectorName />
        </div>
      </div>
    </div>
  );
};
