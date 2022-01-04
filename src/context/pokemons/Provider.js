import { useState } from "react";
import PokemonContext from ".";
import apiCall from "../../api";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");
      const pokemonResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      setPokemons(pokemonResult.results);
    } catch (error) {
      setHasError(true);
      console.log(error);
      setErrorMessage("Something went wrong");
      setPokemons([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Pokemon id is required");
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");
      const pokemonDetailResult = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetailResult);
    } catch (error) {
      setHasError(true);
      console.log(error);
      setErrorMessage("Something went wrong");
      setPokemonDetail({});
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        pokemonDetail,
        isLoading,
        hasError,
        errorMessage,
        getPokemons,
        getPokemonDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
