import { Typography } from "@mui/material";
import { React, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchedPokemons } from "../../features/actions";
export default function Home() {
  const state = useSelector((state) => state.pokemons.list);
  const error = useSelector((state) => state.pokemons.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedPokemons());
  }, [dispatch]);

  if (error) {
    return (
      <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
        {error}
      </Typography>
    );
  }
  return (
    <Fragment>
      <Typography variant="h4">Number of pokemons: {state.length}</Typography>
    </Fragment>
  );
}
