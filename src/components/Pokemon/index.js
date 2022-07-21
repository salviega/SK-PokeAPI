import React from 'react';
import './Pokemon.css';
import { PokemonStart } from '../PokemonIcon/PokemonStart';

function Pokemon(props) {
  const onClickButton = (pokemon) => {
    props.setSelectedPokemon(pokemon);
    props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
  };
  return (
    <li className='row card withoutBullet'>
      {props.pokemon != null ? (
        <div className='container'>
          <PokemonStart pokemon={props.pokemon} items={props.items} addIteam={props.addIteam} />
          <img src={props.pokemon.sprites.front_default} alt='default' />
          <p>Pokemón: {props.pokemon.id}</p>
          <p>{props.pokemon.name}</p>
          <button onClick={() => onClickButton(props.pokemon)}>Información</button>
        </div>
      ) : (
        'No hay pokemons'
      )}
    </li>
  );
}

export { Pokemon };
