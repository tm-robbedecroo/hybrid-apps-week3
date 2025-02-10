"use client";

import { paths } from "@/lib/data/paths";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="absolute right-10 top-5 z-30 hidden gap-10 md:flex">
      {paths.map(({ name, href }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(
            "font-mono underline-offset-4 transition-transform hover:underline",
            pathname === href && "underline",
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
