import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import image1 from "@public/images/activities/image-1.png";
import image2 from "@public/images/activities/image-2.png";
import image3 from "@public/images/activities/image-3.png";
import image4 from "@public/images/activities/image-4.png";
import image5 from "@public/images/activities/image-5.png";
import image6 from "@public/images/activities/image-6.png";
import image7 from "@public/images/activities/image-7.png";
import image8 from "@public/images/activities/image-8.png";
import Image from "next/image";

export function Activities() {
  return (
    <section id="activities" className="flex flex-col bg-muted py-24 lg:gap-y-12 lg:py-32 xl:py-48">
      <h2 className="mb-12 w-fit px-8 font-mono text-2xl font-bold md:px-12 md:text-3xl lg:px-24 xl:px-32 xl:text-4xl 2xl:px-48">
        Mijn activiteiten
      </h2>

      <Carousel opts={{ loop: true }}>
        <CarouselContent className="overflow-y-visible">
          {[
            {
              src: image1,
              alt: "Image 1",
            },
            {
              src: image2,
              alt: "Image 2",
            },
            {
              src: image3,
              alt: "Image 3",
            },
            {
              src: image4,
              alt: "Image 4",
            },
            {
              src: image5,
              alt: "Image 5",
            },
            {
              src: image6,
              alt: "Image 6",
            },
            {
              src: image7,
              alt: "Image 7",
            },
            {
              src: image8,
              alt: "Image 8",
            },
          ].map(({ src, alt }, index) => (
            <CarouselItem key={index} className="py-4 pl-12 md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
              <Image
                key={index}
                src={src}
                alt={alt}
                className={cn(
                  "rounded-2xl border-4 border-card object-cover shadow transition-all duration-300 hover:scale-75",
                  index % 2 === 0 ? "-rotate-3" : "rotate-3",
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
