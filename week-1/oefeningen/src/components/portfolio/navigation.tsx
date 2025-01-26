"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Diensten",
    href: "/diensten",
  },
  {
    name: "Over ons",
    href: "/over-ons",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10 fixed right-10 top-5 z-30">
      {paths.map(({ name, href }, index) => (
        <Link
          key={index}
          href={href}
          className={`"hover:underline hover:scale-110 transition-transform ${
            pathname === href && "underline"
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
