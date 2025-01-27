import { PokemonDetail } from "@/components/pokemons/detail";
import { getPokemonById } from "@/server/pokemons";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PokemonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pokemon = await getPokemonById(id);

  return <PokemonDetail pokemon={pokemon} />;
}
