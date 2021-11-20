import { combineReducers } from "redux";
import pokemonsReducer from "./features/pokemonReducer";
export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});
