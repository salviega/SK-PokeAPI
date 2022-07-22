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
    let promises = data.results.map(async (pokemon) => {
      return await getPokemonsByUrl(pokemon.url);
    });
    let results = await Promise.all(promises);
    setPokemons(results);
  };

  const addIteam = (newItem) => {
    if (items.legth < 1) {
      let newItems = [...items];
      newItems.push(newItem);
    } else {
      let newItems = items.filter((iteam) => iteam.pokemon !== newItem.pokemon);
      newItems.push(newItem);
      saveItem(newItems);
    }
  };

  const getFavoritesPokemons = (pokemon) => {
    try {
      let favorites = items.filter((item) => item.pokemon === pokemon.name);
      if (favorites[0].favorite) return true;
      return false;
    } catch (error) {
      return false;
    }
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
            getFavoritesPokemons={getFavoritesPokemons(pokemon)}
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
