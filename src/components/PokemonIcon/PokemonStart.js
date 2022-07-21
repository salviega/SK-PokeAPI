import React from 'react';

function PokemonStart(props) {
  const onSavePokemon = (pokemon) => {
    //let newIteam = props.items.filter((item) => item.pokemon === pokemon.name);
    let click = true;
    let response = {
      pokemon: pokemon.name,
      favorite: click,
    };
    props.addIteam(response);
  };
  return (
    <i className={`bi bi-star ${props.favorited && 'box-btn'}`} onClick={() => onSavePokemon(props.pokemon)}>
      <span className='glyphicon glyphicon-heart-empty' aria-hidden='true'></span>
    </i>
  );
}

export { PokemonStart };
