import React from 'react';
import './PokemonSearch.css';

function PokemonSearch(props) {
  const onChange = (event) => {
    props.setSearchValue(event.target.value);
  };
  return (
    <div className='seachPokemon'>
      <input placeholder='Search a po-ke-món!' value={props.searchValue} onChange={onChange} />
    </div>
  );
}

export { PokemonSearch };
