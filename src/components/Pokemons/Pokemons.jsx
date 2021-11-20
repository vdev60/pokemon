import React, {Fragment } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { yellow } from "@mui/material/colors";
import Spinner from "../Spinner";
import { connect } from "react-redux";
import { fetchedPokemons } from "../../features/actions";
import { useSelector } from "react-redux";
function Pokemons(props) {
  const loading = useSelector(state => state.pokemons.loading)
  useEffect(() => {
    props.pokemons();
  }, []);

  const listItems = props.list.map((item, index) => {
    return <PokemonCard data={item} key={index} />;
  });

  if (props.error) {
    return (
      <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
        {props.error}
      </Typography>
    );
  }

  return (
    <Fragment>
      {loading && <Spinner color={yellow[800]} />}
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

const mapStateToProps = (state) => {
  return {
    list: state.pokemons.list,
    loading: state.pokemons.loading,
    error: state.pokemons.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pokemons: () => dispatch(fetchedPokemons()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
