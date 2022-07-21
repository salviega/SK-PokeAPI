import React from 'react';
import './PokemonInfo.css';

function PokemonInfo(props) {
  const onCancel = () => {
    props.setOpenModal(false);
  };

  return (
    <div className='container card'>
      <img src={props.selectedPokemon.sprites.front_default} alt='default' />
      <p>Pokemón: {props.selectedPokemon.id}</p>
      <p>{props.selectedPokemon.name}</p>
      <button type='button' onClick={onCancel}>
        Regresar
      </button>
    </div>
  );
}

export { PokemonInfo };
