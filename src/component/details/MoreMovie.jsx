import { useState } from "react";
import { Moviecart } from "../../../movie/src/component/Moviecart";

export const MoreMovie = () => {
  //   const [MoreMovie, setMoreMovie] = useState([]);
  //   const getMoreMovi = async () => {
  //     try {
  //       const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}`, {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}/movie/${id}/similar?language=en-US&page=1`,
  //         },
  //       });
  //       const movies = await response.json();
  //       setMoreMovie(movies.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getMoreMovie();
  //   }, []);

  return (
    <div className="w-[280px] h-[440px] ml-[180px]">
      <p className=" text-lg"> More like this </p>
      <div className="grid grid-cols-4 gap-4">
        <Moviecart />
      </div>
    </div>
  );
};
