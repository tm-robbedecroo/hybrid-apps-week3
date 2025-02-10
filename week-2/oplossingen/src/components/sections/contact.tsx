import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import image1 from "@public/images/contact-banner.png";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative grid place-items-center gap-4">
      <Image
        src={image1}
        alt="Your Name"
        className="inset-0 -z-10 h-full w-full object-cover grayscale"
        fill
      />

      <div className="flex w-full flex-col items-center justify-center px-8 py-24 backdrop-blur-md md:px-12 lg:gap-y-12 lg:px-24 lg:py-32 xl:px-32 xl:py-48 2xl:px-48">
        <h2 className="mb-12 w-fit font-mono text-2xl font-bold text-background md:text-3xl xl:text-4xl">
          Stuur mij een bericht
        </h2>

        <form className="flex w-full max-w-xl flex-col gap-6">
          <div className="grid gap-2">
            <Label className="text-background" htmlFor="email">
              Naam
            </Label>
            <Input id="name" type="name" placeholder="John Doe" required />
          </div>

          <div className="grid gap-2">
            <Label className="text-background" htmlFor="email">
              Email
            </Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>

          <div className="grid gap-2">
            <Label className="text-background" htmlFor="password">
              Bericht
            </Label>
            <Textarea id="message" required />
          </div>

          <Button className="w-full">Verzenden</Button>
        </form>
      </div>
    </section>
  );
}
