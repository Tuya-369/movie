import { getMovieTrailerById } from "@/getMovieTrailerById";
import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Button } from "../../movie/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export const MovieTrailer = ({ movieId }) => {
  console.log("movieeIddd", movieId);
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const getMovieTrailer = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailerById(movieId);
        setTrailer(data.results);
      } catch (error) {
        console.log("dailed to fetch movie trailer:", error);
      }
    };
    getMovieTrailer();
  }, []);
  const MovieTrailer = trailer.find(
    (Video) => Video.name === "Official Trailer"
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute mt-10 " variant="ghost">
          <PlayIcon className="gap-2" /> Watch Trailer{" "}
        </Button>
      </DialogTrigger>
      <DialogTitle />
      <DialogContent className="sm:max-w-fit">
        <YouTube
          videoId={MovieTrailer?.key}
          opts={{
            height: "561",
            widtch: "997",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
