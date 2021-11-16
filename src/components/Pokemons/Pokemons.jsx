import React, { Fragment } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { yellow } from "@mui/material/colors";
import Spinner from "../Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../features/pokemons/pokemonsSlice";
function Pokemons() {
  const status = useSelector((state) => state.pokemons.status);
  const pokemons = useSelector((state) => state.pokemons.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const listItems = pokemons.map((item, index) => {
    return <PokemonCard data={item} key={index} />;
  });
  return (
    <Fragment>
      {status === "loading" && <Spinner color={yellow[800]} />}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listItems}
      </Grid>
    </Fragment>
  );
}

export default Pokemons;
