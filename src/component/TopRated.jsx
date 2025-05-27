import { ArrowRight } from "lucide-react";
import { Moviecart } from "./Moviecart";
import Link from "next/link";
export const TopRated = ({ movie }) => {
  return (
    <div className="px-5">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="h-[229px] w-[390px] rounded-t-lg md:h-[340px] md:w-[230px] "
        ></img>
        <div className="flex justify-between  h-[36px] w-full ">
          <h3 className="text-2xl font-semibold pl-3">Top Rated</h3>
          <Link href={`/category/Topratting`}>
            <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
              See More {} <ArrowRight className="h-[16px] w-[16px]  " />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <Moviecart key={index}>
              <div className="p-1"></div>
            </Moviecart>
          ))}
        </div>
      </div>
    </div>
  );
};
