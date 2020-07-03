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

function App() {
  //Initialing the state of obj pokemon 
  const [pokemon] = useState ([
    { name: "Pikachu", price: 100 },
    { name: "Charmander", price: 200 },
    { name: "Squirtle", price: 300 },
    { name: "Bulbasaur", price: 500 }
  ]);

  //Initialing the state of cart 
  const [cart, setCart] = useState([]);
}

ReactDOM.render(
    <h1>Pokestore</h1>,
  document.getElementById('root')
);

