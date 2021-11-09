import { React, Fragment } from "react";
import RickCard from "./RickCard";
import { gql, useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import Spinner from "../Spinner";
import Typography from "@mui/material/Typography";

function Ricks() {
  const queryRicks = gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          id
          name
          image
          species
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(queryRicks);
  if (loading) return <Spinner color={blue[800]} />;
  if (error)
    return (
      <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
        Error
      </Typography>
    );

  const rickCards = data.characters.results.map((rick) => {
    return (
      <Grid key={rick.id} item sm={6} md={6} sx={{ ml: "auto", mr: "auto" }}>
        <RickCard rick={rick}/>
      </Grid>
    );
  });
  return (
    <Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {rickCards}
      </Grid>
    </Fragment>
  );
}

export default Ricks;
