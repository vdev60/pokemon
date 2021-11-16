import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemons = createAsyncThunk(
  "pokemons/getPokemons",
  async () => {
    return fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        return data.results;
      });
  }
);

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPokemons.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPokemons.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPokemons.rejected]: (state, action) => {
      state.status = "faild";
    },
  },
});

export default pokemonsSlice.reducer;
