import React from 'react';
import './SearchPokemon.css';

function SearchPokemon(props) {
  const onChange = (event) => {
    props.setSearchValue(event.target.value);
  };
  return (
    <div className='seachPokemon'>
      <input placeholder='Search a po-ke-mon!' value={props.searchValue} onChange={onChange} />
    </div>
  );
}

export { SearchPokemon };
