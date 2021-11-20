import {
  FETCHED_POKEMONS,
  HIDE_LOADER,
  SHOW_LOADER,
  FETCH_ERROR,
} from "./types";

const initialState = {
  list: [],
  loading: false,
  error: false,
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_POKEMONS:
      return {
        ...state,
        list: action.payload,
      };

    case HIDE_LOADER:
      return {
        ...state,

        loading: false,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
