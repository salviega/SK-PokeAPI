import React from 'react';
import './App.css';
import { Title } from '../Title';
import { Pokedex } from '../Pokedex';
import { Pokemon } from '../Pokemon';
import { getPokemons, getPokemonsByUrl } from '../../middleware/get-api';

function App() {
  const [pokemons, setPokemons] = React.useState(null);
  const [pokemonsData, setpokemonsData] = React.useState([]);

  const fetchPokemons = async () => {
    const data = await getPokemons();
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

  return (
    <React.Fragment>
      <Title />
      <Pokedex pokemon={pokemons} pokemonsData={pokemonsData}>
        <Pokemon />
      </Pokedex>
    </React.Fragment>
  );
}

export default App;
