import { Pokemon } from "@/lib/types/pokemon";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

type PokemonDetailProps = {
  pokemon: Pokemon;
};

export async function PokemonDetail({ pokemon }: PokemonDetailProps) {
  return (
    <div className="text-center min-h-screen h-full flex flex-col justify-center items-center gap-y-20 w-full bg-gradient-to-r from-yellow-600 to-red-600 py-7">
      <Image
        src={pokemon.sprites.other?.dream_world.front_default ?? ""}
        alt={pokemon.name}
        width={200}
        height={200}
        className="w-full max-h-80"
      />

      <h1 className="text-4xl lg:text-9xl uppercase font-black text-white/100">{pokemon.name}</h1>
    </div>
  );
}

export function PokemonDetailSkeleton() {
  return (
    <div className="text-center min-h-screen h-full flex flex-col justify-center items-center gap-y-20 w-full py-7">
      <Skeleton className="aspect-square w-80" />
      <Skeleton className="h-20 w-[35rem]" />
    </div>
  );
}
