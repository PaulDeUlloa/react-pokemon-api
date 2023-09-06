import './App.css';
import PokemonFetch from "./components/PokemonFetch";
import PokemonName from "./components/PokemonName";
import { useState } from 'react';

function App(){
  const [pokemonName, setPokemonName] = useState([]);

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
    .then((res) => {

        return res.json(); 
    })
    .then((jsonRes) => {
        
        console.log(jsonRes);
        setPokemonName(jsonRes);
    })
    .catch((err) => console.log(err));
  }
}

function App() {
  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <PokemonFetch fetchPokemon={fetchPokemon} />
      <PokemonName pokemonName={pokemonName} />
    </div>
  );
}

export default App;
