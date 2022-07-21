import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { getPokemons, getPokemonsByUrl } from '../../middleware/get-api';
import { useLocalStorage } from './useLocalStorage';

import React from 'react';
import { PokemonTitle } from '../PokemonTitle';
import { PokemonSearch } from '../PokemonSearch';
import { Pokedex } from '../Pokedex';
import { Pokemon } from '../Pokemon';
import { Modal } from '../Modal';
import { PokemonInfo } from '../PokemonInfo';

function App() {
  const { item: items, saveItem } = useLocalStorage('POKEMONS', []);
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

  const addIteam = (iteam) => {
    console.log(items);
    let newItems = [...items];
    newItems.push(iteam);
    saveItem(newItems);
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <React.Fragment>
      <div style={{ margin: '25px' }}>
        <PokemonTitle />
        <PokemonSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <Pokedex>
        {alreadyPokemons.map((pokemon, index) => (
          <Pokemon
            key={index}
            pokemon={pokemon}
            index={index}
            items={items}
            addIteam={addIteam}
            openModal={openModal}
            setOpenModal={setOpenModal}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        ))}
      </Pokedex>
      {!!openModal && (
        <Modal>
          <PokemonInfo selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} openModal={openModal} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
