import { PlayIcon, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";
import Autoplay from "embla-carousel-autoplay";

export function MovieCarousel({ nowPlayingMovie }) {
  console.log(nowPlayingMovie);

  return (
    <Carousel
      className="relative w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {nowPlayingMovie?.slice(0, 4).map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:left-10 " />
      <CarouselNext className="md:right-10" />
    </Carousel>
  );
}
