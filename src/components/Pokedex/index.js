import React from 'react';
import './Pokedex.css';

function Pokedex(props) {
  return (
    <section>
      <ul className='cards'>{props.children}</ul>
    </section>
  );
}

export { Pokedex };
