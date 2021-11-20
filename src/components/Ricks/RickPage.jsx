import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { blue } from "@mui/material/colors";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Spinner from "../Spinner";
import { getRick } from "../../Schema/getRicks";
function RickPage() {
  const rickId = useParams();
  const id = rickId.rickId;
  const { loading, error, data } = useQuery(getRick(id));
  if (loading) return <Spinner color={blue[800]} />;
  if (error)
    return (
      <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
        Error {error.message}
      </Typography>
    );
  const rick = data.character;
  return (
    <Fragment>
      <Paper variant="outlined">
        <Typography variant="h3" sx={{ textAlign: "center", padding: 4 }}>
          {rick.name}
        </Typography>
        <Grid container spacing={4} columns={{ xs: 4, md: 12 }}>
          <Grid item md={5}>
            <img src={rick.image} alt={rick.name} />
          </Grid>
          <Grid item md={7}>
            <Typography variant="h5">Information</Typography>
            <br />
            <Typography variant="p">
              <strong>Status:</strong> {rick.status}
            </Typography>
            <br />
            <Typography variant="p">
              <strong>Gender:</strong> {rick.gender}
            </Typography>
            <br />
            <Typography variant="p">
              <strong>Species:</strong> {rick.species}
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default RickPage;
