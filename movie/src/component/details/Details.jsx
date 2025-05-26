import { Button } from "@/components/ui/button";

export const Details = ({movie}) => {
  return (
    <div>
      <Button
        className="w-[77px] h-[20px] text-text-foreground "
        variant="outline"
      >
        Fairy Tale
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground "
        variant="outline"
      >
        Pop Musical
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground "
        variant="outline"
      >
        Fantasy
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground "
        variant="outline"
      >
        Musical
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground "
        variant="outline"
      >
        Romance
      </Button>
      <div>
  <p>{movie.overview}</p>
  
      </div>
    </div>
  );
};
