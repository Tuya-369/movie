import { Moviecart } from "@/component/Moviecart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../../movie/src/component/Footer";
import { Header } from "@/component/Header";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState({});
  const router = useRouter();
  const genreIds = router.query.genreIds;

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreIds}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setGenreMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (genreIds) {
      getMovieGenres();
    }
  }, [genreIds]);

  return (
    <div>
      <Header />
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-2xl font-bold mt-8 mb-4">Upcoming</h2>
        <div className="flex flex-wrap gap-4 justify-start">
          {genreMovies?.results?.map((movie) => (
            <Moviecart key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
