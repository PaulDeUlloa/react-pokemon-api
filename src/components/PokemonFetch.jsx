const PokemonFetch = (props) =>{
    return (
        <fieldset>
            <legend>PokemonFetch.jsx</legend>
            <p>
                Let's fetch some Pokemon Data!
            </p>

            <button onClick={() => props.fetchPokemon()}>Fetch Pokemon</button>
        </fieldset>
    );

};

export default PokemonFetch;