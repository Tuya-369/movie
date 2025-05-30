import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { Upcoming } from "@/component/Upcoming";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!router.isReady || !movieId) return;

    const getMovie = async () => {
      const data = await getUpcomingByid(movieId);
      setMovie(data);
    };
    getMovie();
  }, [router.isReady, movieId]);
  if (!movie) {
    return (
      <div>
        <div className=" container  mx-auto ">
          <Header />
          <div className=" mt-[20px]flex justify-between h-[36px] w-full w-[1440px] h-[1050px]">
            <Upcoming />
          </div>
        </div>
        <div className="mt-[700px] mt-[30spx]">
          <Footer />
        </div>
      </div>
    );
  }
}
