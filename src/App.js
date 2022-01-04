import Router from "./routes";
import PokemonProvider from "./context/pokemons/Provider";

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
}

export default App;
