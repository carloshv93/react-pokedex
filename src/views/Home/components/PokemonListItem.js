import { Fragment } from "react";
import { Link } from "react-router-dom";

function PokemonListItem({ name, url }) {
  const getId = () => url.split("/")[6];

  return (
    <Fragment>
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${getId()}`}>More details</Link>
      </button>
    </Fragment>
  );
}

export default PokemonListItem;
