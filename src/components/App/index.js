import React from 'react';
import './App.css';
import { Title } from '../Title';
import { SearchPokemon } from '../SearchPokemon';
import { Pokedex } from '../Pokedex';
import { Modal } from '../Modal';
import { Pokemon } from '../Pokemon';
import { InfoPokemon } from '../InfoPokemon';
import { getPokemons, getPokemonsByUrl } from '../../middleware/get-api';

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [selectedPokemon, setSelectedPokemon] = React.useState({});
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const alreadyPokemons = pokemons.filter((pokemon) => {
    let textPokemon = pokemon.name.toLocaleLowerCase();
    let searchPokemon = searchValue.toLocaleLowerCase();
    return !!textPokemon.includes(searchPokemon);
  });

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
      <Pokedex>
        {alreadyPokemons.map((pokemon, index) => (
          <Pokemon
            key={index}
            pokemon={pokemon}
            index={index}
            openModal={openModal}
            setOpenModal={setOpenModal}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        ))}
      </Pokedex>
      {!!openModal && (
        <Modal>
          <InfoPokemon selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} openModal={openModal} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
