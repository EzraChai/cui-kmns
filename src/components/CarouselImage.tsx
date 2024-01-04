"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/client";
import { RecentPhoto } from "@/lib/types";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export default function CarouselImage({
  recentPhotos,
}: {
  recentPhotos: RecentPhoto[];
}) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          stopOnInteraction: true,
          delay: 4000,
        }),
        WheelGesturesPlugin(),
      ]}
    >
      <CarouselContent>
        {recentPhotos.map((recentPhoto, index) => (
          <CarouselItem key={index}>
            <Card className=" border-2 border-black dark:border-white overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  className="object-center object-cover "
                  fill
                  src={urlFor(recentPhoto.photo.asset).url()}
                  alt="脆 照片"
                />
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div> */}
    </Carousel>
  );
}
