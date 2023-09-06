import React from "react";

const PokemonEntry = ({ pokeName, pokeImg }) => {
    return (
        <fieldset>
            <legend>PokemonEntry.jsx</legend>
            <div>
                <p>Pokemon Name: {pokeName}</p>
                <img src={pokeImg} alt={pokeName} />
            </div>
        </fieldset>
    );
};

export default PokemonEntry;