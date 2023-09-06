import React from "react";
import { useState } from "react";

import PokemonEntry from "./PokemonEntry";


const PokemonFetch = () => {
    const [pokemon, setPokemon] = useState();

    const getPokemonFetch = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
            .then((res) => {
                // If we return here, we'll get our response converted to JSON.
                return res.json(); // res.json() is another promise, so we'll need a .then() to pause until it finishes!
            })
            .then((jsonRes) => {

                // Now we can pick up the return from the previous function as "jsonRes" and now we have the finished JSON object.
                console.log(jsonRes);
                setPokemon(jsonRes);
            })
            .catch((err) => console.log(err));
    };

    return (
        <fieldset>
            <legend>PokemonFetch.jsx</legend>
            <p>
                Let's fetch some Pokemon Data!
            </p>

            <button onClick={getPokemonFetch}>Fetch Pokemon Data</button>

            <div>
                {pokemon ? (
                    <PokemonEntry
                        pokeName={pokemon.name}
                        pokeImg={pokemon.sprites.front_default}
                    />
                ) : (
                    <p>Click button to start!</p>
                )}
            </div>
        </fieldset>
    );

};

export default PokemonFetch;