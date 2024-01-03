"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/client";
import Image from "next/image";

export default function CarouselImage({ recentPhotos }) {
  console.log(recentPhotos);
  return (
    <Carousel>
      <CarouselContent className="relative aspect-video">
        {recentPhotos.map((recentPhoto, index) => (
          <CarouselItem key={index}>
            <Image
              className="object-center object-cover aspect-video"
              fill
              src={urlFor(recentPhoto.photo.asset).url()}
              alt="脆 照片"
            ></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
