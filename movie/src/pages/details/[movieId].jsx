import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { Details } from "@/component/details/Details";
import { getMovieById } from "@/getMovieById";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieCarouselItem } from "@/component/details/DetailsHeader";
import { Title } from "@/component/details/IdMovieTitle";

export default function Page() {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!router.isReady || !movieId) return;

    const getMovie = async () => {
      const data = await getMovieById(movieId);
      console.log("dataaa:", data); 
      setMovie(data);
    };

    getMovie();
  }, [router.isReady, movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MovieCarouselItem movie={movie} />
      <Title />
      <Details movie={movie} />
      <Footer />
    </div>
  );
}
