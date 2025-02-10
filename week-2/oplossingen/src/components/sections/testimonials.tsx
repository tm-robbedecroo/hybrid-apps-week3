"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";
import Autoplay from "embla-carousel-auto-scroll";
import { Card, CardContent } from "../ui/card";

export function Testimonials() {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section
      id="testimonials"
      className="flex flex-col bg-background py-24 lg:gap-y-12 lg:py-32 xl:py-48"
    >
      <h2 className="mb-12 w-fit px-8 font-mono text-2xl font-bold md:px-12 md:text-3xl lg:px-24 xl:px-32 xl:text-4xl 2xl:px-48">
        Mijn testimonials
      </h2>

      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
        <TestimonialRow items={firstRow} direction="forward" />
        <TestimonialRow items={secondRow} direction="backward" />
      </div>
    </section>
  );
}

/**
 * Testimonial row
 */
type TestimonialRowProps = {
  items: typeof testimonials;
  direction: "forward" | "backward";
};

function TestimonialRow({ items, direction }: TestimonialRowProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      plugins={[
        Autoplay({
          direction,
          speed: 600 / 1000,
          startDelay: 100,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {items.map(({ name, body }, index) => (
          <CarouselItem
            key={`testimonial_${index}`}
            className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
          >
            <div className="h-full p-1">
              <Card className="h-full w-full rounded-xl bg-muted/40 hover:border-accent hover:bg-muted">
                <p className="p-4 font-semibold xl:text-lg">{name || "Anonymous"}</p>
                <CardContent className="p-4">
                  <p className="text-sm leading-loose xl:text-lg">{body}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
