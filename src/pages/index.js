import { MovieCarousel } from "@/component/Carousel";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { MovieCarouselItem } from "@/component/MovieCarouselItem";
import { Popular } from "@/component/Popular";
import { SkeletonCard } from "@/component/SkeletonCard";
import { TopRated } from "@/component/TopRated";
import { Upcoming } from "@/component/Upcoming";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setloading] = useState([true]);
  const [nowPlaying, setNowPlayingMovie] = useState([]);
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&pages=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();

      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div className="container mx-auto overflow-hidden">
      <Header />
      {loading ? (
        <SkeletonCard />
      ) : (
        <MovieCarousel nowPlayingMovie={nowPlaying} />
      )}
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
