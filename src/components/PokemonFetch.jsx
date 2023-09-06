import React from "react";
import { useState } from "react";
import axios from "axios";

import PokemonEntry from "./PokemonEntry";
import PokemonSearch from "./PokemonSearch";


const PokemonFetch = () => {
    const [pokemon, setPokemon] = useState();

    const getPokemonFetch = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`)
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
    const getPokemonAxios = () => {
        //! Axios allows us to skip converting the object we fetch into JSON.
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then((res) => {
                setPokemon(res.data);
            })
            .catch((err) => console.log(err));
    };
    const searchPokemonAxios = (pokeName) => {
        //! Axios allows us to skip converting the object we fetch into JSON.
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((res) => {
                setPokemon(res.data);
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
            <button onClick={getPokemonAxios}>Axios Pokemon Data</button>

            <PokemonSearch searchPokemonAxios={searchPokemonAxios} />

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