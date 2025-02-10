import { paths } from "@/lib/data/paths";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      {...props}
      className={cn(
        "flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6",
        className,
      )}
    >
      <p className="text-xs leading-5 text-muted-foreground">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>

      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        {paths.map(({ name, href }, index) => (
          <Link
            key={index}
            href={href}
            className="font-mono text-xs underline-offset-4 hover:underline"
          >
            {name}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
