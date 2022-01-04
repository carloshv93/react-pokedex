/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// import { useContext } from "react";
import usePokemonsStore from "../../stores/pokemons";
import shallow from "zustand/shallow";
// import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Home() {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    usePokemonsStore(
      (state) => ({
        getPokemons: state.getPokemons,
        pokemons: state.pokemons,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage,
      }),
      shallow
    );

  // const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
  //   useContext(PokemonContext);

  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if (isLoading) <Loading title={"Loading pokemons"} />;

  return hasError ? (
    <Error message={errorMessage} />
  ) : (
    <PokemonList pokemons={pokemons} />
  );
}

export default Home;
