import {
  FETCHED_POKEMONS,
  HIDE_LOADER,
  SHOW_LOADER,
  FETCH_ERROR,
} from "./types";
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

export function fetchedPokemons() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    if (response.ok === false) {
      console.log(response)
      const message = response.status;
      dispatch({ type: FETCH_ERROR, payload: `Error ${message}` });
      return;
    }
    const json = await response.json();
    const result = await json.results;
    dispatch({ type: FETCHED_POKEMONS, payload: result });
    dispatch(hideLoader());
  };
}