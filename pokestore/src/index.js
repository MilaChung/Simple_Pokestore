import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Function to call the pokemon and price
const Pokemon = props => {
  //Initialing the value of variable pokemon and cart button
  const { pokemon, addCart} = props;

  return (
    <div>
      {pokemon.name} ${pokemon.price}
      {addCart}
    </div>
  );
};

ReactDOM.render(
    <h1>Pokestore</h1>,
  document.getElementById('root')
);

