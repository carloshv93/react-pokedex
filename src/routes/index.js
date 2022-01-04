import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import PokemonDetail from "../views/PokemonDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokemon/:id" exact element={<PokemonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
