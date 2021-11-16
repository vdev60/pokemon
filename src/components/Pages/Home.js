import { Typography } from "@mui/material";
import { React, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../features/pokemons/pokemonsSlice";
import { useEffect } from "react";

export default function Home() {
  const state = useSelector(state => state.pokemons.list)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch])
  
  return (
    <Fragment>
      <Typography variant="h4">Number of pokemons: {state.length}</Typography>
    </Fragment>
  );
}
