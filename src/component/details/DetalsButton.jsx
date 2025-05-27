import { Button } from "@/components/ui/button";

const genres = ["Fairy Tale", "Pop Musical", "Fantasy", "Musical", "Romance"];

export const DetailButton = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {genres.map((genre) => (
        <Button
          key={genre}
          className="h-8 px-4 text-xs text-text-foreground"
          variant="outline"
        >
          {genre}
        </Button>
      ))}
    </div>
  );
};
