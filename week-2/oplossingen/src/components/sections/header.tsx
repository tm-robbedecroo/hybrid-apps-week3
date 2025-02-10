import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import homeBanner from "@public/images/home-banner.jpg";
import Image from "next/image";

export function Header() {
  return (
    <section className="flex min-h-[75vh] w-full items-center justify-center bg-primary/30 px-8 text-primary-foreground md:px-12 lg:px-24 xl:px-32 2xl:px-48">
      <div className="space-y-6">
        <Image
          src={homeBanner}
          alt="Your Name"
          className="size-20 rounded-full shadow-2xl transition-all hover:scale-105"
        />

        <h1 className="max-w-[30ch] font-mono text-4xl font-bold md:text-5xl xl:text-6xl">
          Software designer, founder, and amateur astronaut.
        </h1>

        <p className="max-w-[50ch] text-xl">
          Welcome to my portfolio. I&apos;m a passionate developer creating innovative solutions and
          bringing ideas to life through code.
        </p>

        <div className="flex gap-4">
          {[
            {
              href: "https://github.com/your-username",
              icon: Icons.github,
            },
            {
              href: "https://facebook.com/your-username",
              icon: Icons.facebook,
            },
            {
              href: "https://instagram.com/your-username",
              icon: Icons.instagram,
            },
          ].map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
