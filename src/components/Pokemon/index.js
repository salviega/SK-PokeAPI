import React from 'react';
import './Pokemon.css';

function Pokemon(props) {
  const onClickButton = (pokemon) => {
    props.setSelectedPokemon(pokemon);
    props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
  };
  return (
    <li className='card withoutBullet'>
      {props.pokemon != null ? (
        <div className='container'>
          <img src={props.pokemon.sprites.front_default} alt='default' />
          <p>Pokemon: {props.pokemon.id}</p>
          <p>{props.pokemon.name}</p>
          <button onClick={() => onClickButton(props.pokemon)}>Info</button>
        </div>
      ) : (
        'No hay pokemons'
      )}
    </li>
  );
}

export { Pokemon };
