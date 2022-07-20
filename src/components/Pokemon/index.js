import React from 'react';
import './pokemon.css';
import image from '../../assert/images/DefaultPokemon.jpeg';

async function Pokemon(props) {
  const { pokemons } = props;
  console.log(pokemons);
  return <img src={image} alt='default' />;
}

export { Pokemon };
