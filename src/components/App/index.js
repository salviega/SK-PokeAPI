import React from 'react';
import './App.css';
import { Title } from '../Title';
import { SearchPokemon } from '../SearchPokemon';
import { Pokedex } from '../Pokedex';
import { getPokemons, getPokemonsByUrl } from '../../middleware/get-api';

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const fetchPokemons = async () => {
    let data = await getPokemons();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonsByUrl(pokemon.url);
    });
    let results = await Promise.all(promises);
    setPokemons(results);
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <React.Fragment>
      <Title />
      <SearchPokemon searchValue={searchValue} setSearchValue={setSearchValue} />
      <Pokedex pokemons={pokemons}></Pokedex>
    </React.Fragment>
  );
}

export default App;
