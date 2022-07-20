import React from 'react';
import './SearchPokemon.css';

function SearchPokemon(props) {
  const onChange = (event) => {
    props.setSearchValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(props.searchValue);
  };

  return (
    <div className='seachPokemon'>
      <form onSubmit={onSubmit}>
        <input placeholder='Search a po-ke-mon!' value={props.searchValue} onChange={onChange} />
        <button type='submit'> Buscar po-ke-mon!</button>
      </form>
    </div>
  );
}

export { SearchPokemon };
