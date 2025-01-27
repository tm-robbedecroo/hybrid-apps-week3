import { PokemonCard } from "@/components/pokemons/card";
import { PokemonGrid } from "@/components/pokemons/grid";
import { getPokemons } from "@/server/pokemons";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <PokemonGrid>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonGrid>
  );
}
