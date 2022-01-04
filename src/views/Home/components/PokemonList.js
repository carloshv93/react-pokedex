import { Fragment } from "react";
import PokemonListItem from "./PokemonListItem";

function PokemonList({ pokemons }) {
  return (
    <Fragment>
      {pokemons?.map((pokemon, index) => (
        <PokemonListItem key={index} {...pokemon} />
      ))}
    </Fragment>
  );
}

export default PokemonList;
