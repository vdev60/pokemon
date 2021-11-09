import React, { Fragment } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { yellow } from "@mui/material/colors";
import Spinner from "../Spinner";
function Pokemons() {
  const [dataPokemons, setDataPokemons] = useState({ pokemons: [] });
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((resp) => resp.json())
        .then((data) => {
          setLoaded(false);
          setDataPokemons({ pokemons: data.results });
        });
    }, 3000);
  }, []);

  const listItems = dataPokemons.pokemons.map((item, index) => {
    return <PokemonCard data={item} key={index} />;
  });
  return (
    <Fragment>
      {loaded && <Spinner color={yellow[800]}/>}
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
