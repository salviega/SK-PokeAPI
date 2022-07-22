import React from 'react';

function PokemonStart(props) {
  const [favorite, setFavorite] = React.useState(props.getFavoritesPokemons);
  const onSavePokemon = (pokemon) => {
    try {
      let newItem = props.items.filter((item) => item.pokemon === pokemon.name);
      if (newItem[0].favorite === true) {
        let response = {
          pokemon: pokemon.name,
          favorite: false,
        };
        setFavorite(response.favorite);
        props.addIteam(response);
      } else {
        let response = {
          pokemon: pokemon.name,
          favorite: true,
        };
        setFavorite(response.favorite);
        props.addIteam(response);
      }
    } catch (error) {
      let response = {
        pokemon: pokemon.name,
        favorite: true,
      };
      setFavorite(response.favorite);
      props.addIteam(response);
    }
  };
  return <i className={`bi bi-star box-black ${favorite && 'box-red'}`} onClick={() => onSavePokemon(props.pokemon)}></i>;
}

export { PokemonStart };
