import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShortPokemon } from "@/lib/types/pokemon";
import Image from "next/image";
import Link from "next/link";

type PokemonCardProps = {
  pokemon: ShortPokemon;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <li>
      <Link href={`/pokemons/${pokemon.id}`}>
        <Card>
          <CardHeader>
            <CardTitle className="bg-red-500 text-white px-4 py-1 rounded-sm font-bold text-xl capitalize text-center">
              {pokemon.name}
            </CardTitle>
            <CardDescription className="bg-yellow-400 text-black px-4 py-1 rounded-full w-fit">
              #{pokemon.id.toString().padStart(3, "0")}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
              className="w-full max-h-64"
            />
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}
