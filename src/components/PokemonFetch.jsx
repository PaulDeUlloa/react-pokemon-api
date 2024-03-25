const PokemonFetch = (props) => {
  return (
    <fieldset id="pokemonFetchTextStyling">
      <legend>PokemonFetch.jsx</legend>
      <p>Let's fetch some Pokemon Data!</p>

      <button class="btn btn-info" onClick={() => props.fetchPokemon()}>
        Fetch Pokemon
      </button>
    </fieldset>
  );
};

export default PokemonFetch;
