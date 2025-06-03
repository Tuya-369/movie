import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";
import Link from "next/link";
export const DetailButton = ({ movie, genreIds }) => {
  console.log("buttonmovie", movie);
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {movie?.genres.map((genres, index) => (
        <Link href={`/genres`} key={genreIds}>
          <Button
            key={index}
            className="h-8 px-4 text-xs text-text-foreground"
            variant="outline"
          >
            {genres?.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};
