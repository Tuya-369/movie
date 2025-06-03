import { Moviecart } from "@/component/Moviecart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "@/component/Header";
import { Pegnation } from "@/component/Pegnation";
import { Footer } from "@/component/Footer";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState({});
  const router = useRouter();
  const genreIds = router.query.genreIds;

  const getMovieGenres = async () => {
    try {
      const formattedGenreIds = Array.isArray(genreIds)
        ? genreIds.join(",")
        : genreIds;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${formattedGenreIds}&page=1`,
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
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Genre: {router.query.name || "Loading..."}
        </h2>
        {genreMovies?.results?.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-start">
            {genreMovies.results.map((movie) => (
              <Moviecart key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found for this genre.</p>
        )}
        <Pegnation />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
