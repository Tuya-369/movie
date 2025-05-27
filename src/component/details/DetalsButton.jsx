import { Button } from "@/components/ui/button";

export const DetailButton = () => {
  return (
    <div className="pb-[20px]">
      <Button
        className=" mr-3 w-[77px] h-[20px] text-text-foreground "
        variant="outline"
      >
        Fairy Tale
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground mr-3 "
        variant="outline"
      >
        Pop Musical
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground mr-3 "
        variant="outline"
      >
        Fantasy
      </Button>
      <Button
        className="w-[77px] h-[20px] text-text-foreground mr-3  "
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
    </div>
  );
};
