import React from 'react';
import './pokemon.css';
import image from '../../assert/images/DefaultPokemon.jpeg';

async function Pokemon(props) {
  const { pokemons, pokemonsData } = props;
  return (
    <>
      {props.pokemon != null
        ? pokemons.map((pokemon) => (
            <li className='container withoutBullet'>
              <div className='card'>
                <img src={image} alt='default' />
                <p>{pokemon.name}</p>
                <button>Info</button>
              </div>
            </li>
          ))
        : 'No hay pokemons'}
    </>
  );
}

export { Pokemon };
