import React from 'react';

function PokemonStart(props) {
  const onSavePokemon = (pokemon) => {
    let newItem = props.items.filter((item) => item.pokemon === pokemon.name);
    if (newItem[0].favorite === true) {
      let response = {
        pokemon: pokemon.name,
        favorite: false,
      };
      props.addIteam(response);
    } else {
      let response = {
        pokemon: pokemon.name,
        favorite: true,
      };
      props.addIteam(response);
    }
  };
  return (
    <i className={`bi bi-star ${props.favorited && 'box-btn'}`} onClick={() => onSavePokemon(props.pokemon)}>
      <span className='glyphicon glyphicon-heart-empty' aria-hidden='true'></span>
    </i>
  );
}

export { PokemonStart };
