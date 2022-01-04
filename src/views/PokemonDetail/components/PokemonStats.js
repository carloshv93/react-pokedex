import { Fragment } from "react/cjs/react.production.min";

export default function PokemonStats({ stats }) {
  return (
    <Fragment>
      <b>Stats:</b>
      {stats?.map(({ stat: { name }, base_stat }, index) => (
        <Fragment key={index}>
          <p>{`Name: ${name}, Base stat: ${base_stat}`}</p>
        </Fragment>
      ))}
    </Fragment>
  );
}
