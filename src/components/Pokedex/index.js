import React from 'react';
import './Pokedex.css';

function Pokedex(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { Pokedex };
