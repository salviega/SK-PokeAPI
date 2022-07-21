import React from 'react';
import './InfoPokemon.css';

function InfoPokemon(props) {
  const onCancel = () => {
    props.setOpenModal(false);
  };

  return (
    <div className='container'>
      <img src={props.selectedPokemon.sprites.front_default} alt='default' />
      <p>{props.selectedPokemon.id}</p>
      <p>{props.selectedPokemon.name}</p>
      <button type='button' onClick={onCancel}>
        Regresar
      </button>
    </div>
  );
}

export { InfoPokemon };
