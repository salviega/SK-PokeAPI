import React from 'react';
import './Pokedex.css';
// import image from '../../assert/images/DefaultPokemon.jpeg';

function Pokedex({ pokemons }) {
  return (
    <ul>
      {pokemons != null
        ? pokemons.map((pokemon, index) => {
            return (
              <li className='container withoutBullet' key={index}>
                <div className='card'>
                  <img src={pokemon.sprites.front_default} alt='default' />
                  <p>{pokemon.id}</p>
                  <p>{pokemon.name}</p>
                  <button>Info</button>
                </div>
              </li>
            );
          })
        : 'No hay pokemons'}
    </ul>
  );
}

export { Pokedex };
