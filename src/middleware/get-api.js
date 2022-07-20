const getPokemons = async (limit = 150, offset = 0) => {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const getPokemonsByUrl = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

export { getPokemons, getPokemonsByUrl };
