import { useEffect, useState } from "react";
import { Moviecart } from "../../../movie/src/component/Moviecart";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const MoreMovie = () => {
  const [MoreMovie, setMoreMovie] = useState([]);
  const getMoreMovi = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}/movie/${id}/similar?language=en-US&page=1`,
        },
      });
      const movies = await response.json();
      setMoreMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoreMovi();
  }, []);

  return (
    <div className="w-[280px] h-[440px] ml-[180px]">
      <div className="flex justify center">
        <p className=" text-2xl font-semibold pb-[20px] pt-[10px]">
          {" "}
          More like this{" "}
        </p>
        <button className=" mr-[100px] flex py-2 px-4 gap-1 text-sm font-medium ">
          See More <ArrowRight className="h-[16px] w-[16px]  " />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Moviecart />
      </div>
    </div>
  );
};
