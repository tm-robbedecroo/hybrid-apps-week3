import { API_ENDPOINT, POKEMON_IMAGE_URL } from "@/lib/constants";
import { Pokemon, ShortPokemon } from "@/lib/types/pokemon";

/**
 * Get all pokemons
 */
export type GetPokemonsResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: ShortPokemon[];
};

export async function getPokemons() {
  const res = await fetch(`${API_ENDPOINT}/pokemon?limit=151`);

  if (!res.ok) throw new Error("Failed to fetch data");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: GetPokemonsResponse = await res.json();

  return data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      image: `${POKEMON_IMAGE_URL}/${index + 1}.svg`,
    };
  });
}

/**
 * Get pokemon by id
 */
export async function getPokemonById(id: string): Promise<Pokemon> {
  const res = await fetch(`${API_ENDPOINT}/pokemon/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await res.json();
}
