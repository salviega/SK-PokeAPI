import axios from 'axios';

const getPokemons = async () => {
  let url = 'https://pokeapi.co/api/v2/pokemon';
  let data = await axios.get(url);
  return data.data.results;
};

const getPokemonsByUrl = async (url) => {
  return await axios.get(url);
};

export { getPokemons, getPokemonsByUrl };
