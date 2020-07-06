import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./style.css"

//Function to call the pokemon and price
const Pokemon = props => {
  //Initialing the value of variable pokemon and cart button
  const { photo, poke, children } = props;

  return (
    <div className="poke">
      <img className="photo" src={poke.photo}/>
        {poke.name} ${poke.price}
        {children}
    </div>
  );
};

//Function to call the cart 
const Cart = props => {
  const { photo, poke, children } = props;

  return (
    <ul className="item">
      <li>
        <img className="photo-cart" src={poke.photo}/>
        <div>
          {poke.name} ${poke.price}
          {children}
        </div>
      </li>
    </ul>
  );
};

function App() {
  //Initialing the state of obj pokemon 
  const [pokemon] = useState ([
    { photo: "https://pokeres.bastionbot.org/images/pokemon/4.png", name: "Charmander", price: 200 },
    { photo: "https://pokeres.bastionbot.org/images/pokemon/7.png", name: "Squirtle", price: 300 },
    { photo: "https://pokeres.bastionbot.org/images/pokemon/1.png", name: "Bulbasaur", price: 500 }
  ]);

  //Initialing the state of pokemonSearched
  const [pokeSearched, setPokeSearched] = useState('');

  //Initialing the state of cart 
  const [cart, setCart] = useState([]);

  //Function to update the value of cart
  const addToCart = pokeAdded => {
    setCart(cart.concat(pokemon[pokeAdded]));
  };

  //Function to calculate total price of cart
  const calculatePrice = () => {
    return cart.reduce((price, poke) => price + poke.price, 0);
  };

  return (
    <div>
      <h1 className="title"> Simple Pokestore </h1>
      <hr />

      <div className="searchbar">
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> Pokémon Search </label>

                        <input
                            type="text"
                            placeholder="pokémon"
                            value={pokeSearched}
                            onChange={e => setPokeSearched(e.target.value)}
                        />

                        <button type="button" className="ui icon button">
                        <i className="search icon"></i>
                        </button>
                    </div>    
                </form>
            </div>
        </div>

      <div className="app">
        <div className="pokemon">
          {/* Show the pokemon list */}
          {pokemon.map((poke, pokeAdded) => (
            <Pokemon key={pokeAdded} poke={poke}>
              {/* Button with event, when are clicked call the function addToCart */}
              <button className="button" onClick={() => addToCart(pokeAdded)}>Add to cart</button>
            </Pokemon>
          ))}
        </div>

        {/* Show the total price of cart */}
        <div  className="cart">
          {cart.map((poke, pokeAdded) => (
            <Cart key={pokeAdded} poke={poke}>
              {" "}
            </Cart>
          ))}
          <div className="total">Cart Total: ${calculatePrice()}</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

