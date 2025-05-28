import { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";
import { Moviecart } from "../../../movie/src/component/Moviecart";

export const MoreMovie = () => {
  const [movies, setMovies] = useState([]);

  const getMoreMovies = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      });
      const data = await response.json();
      setMovies(data.results.slice(0, 6)); // 6 кино
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMoreMovies();
  }, []);

  return (
  <div className=" w-[1030px] h-[440px] mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">More like this</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600">
          See More <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-10">
        {movies.map((movie) => (
          <Moviecart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
