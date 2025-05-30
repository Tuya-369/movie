import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Moviecart } from "../../../movie/src/component/Moviecart";
import { getMoreMovieID } from "@/getMoreMovieID";

export const MoreMovie = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMoreMovieIds = async () => {
      const response = await getMoreMovieID(movie);
      setMovies(response?.results);
    };
    if (!movie) return;
    getMoreMovieIds();
  }, [movie]);
  return (
    <div className=" w-[1030px] h-[440px] mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">More like this</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600">
          See More <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[32px] px-5 py-3">
        {movies?.slice(0, 4).map((movie) => (
          <Moviecart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
