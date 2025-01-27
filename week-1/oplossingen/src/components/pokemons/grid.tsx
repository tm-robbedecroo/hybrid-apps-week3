import { PropsWithChildren } from "react";
import { Skeleton } from "../ui/skeleton";

export function PokemonGrid({ children }: PropsWithChildren) {
  return (
    <ul className="px-8 py-4 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4">
      {children}
    </ul>
  );
}

export function GridSkeleton() {
  return (
    <PokemonGrid>
      {Array.from({ length: 20 }).map((_, index) => (
        <li key={index}>
          <Skeleton className="aspect-[4/5] w-full" />
        </li>
      ))}
    </PokemonGrid>
  );
}
