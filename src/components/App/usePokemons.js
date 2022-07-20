import React from 'react';
import { pokeApi } from '../../middleware/get-api';

function usePokemons() {
  const { getPokemons, getPokemonsByUrl } = pokeApi;
  const [pokemons, setPokemons] = React.useState(null);
  const [pokemonsData, setpokemonsData] = React.useState([]);

  const fetchPokemons = async () => {
    const data = await getPokemons;
    setPokemons(data);
    const promises = data.map(async (pokemon) => {
      return await getPokemonsByUrl(pokemon.url);
    });
    const results = await Promise.all(promises);
    setpokemonsData(results);
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return {
    pokemons,
    pokemonsData,
  };
}

export { usePokemons };
