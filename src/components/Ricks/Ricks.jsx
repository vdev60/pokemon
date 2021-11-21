import { React, Fragment } from "react";
import RickCard from "./RickCard";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import Spinner from "../Spinner";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { getRicks } from "../../Schema/getRicks";
import { useEffect, useState } from "react";

function Ricks() {
  const { loading, error, data } = useQuery(getRicks);
  const [searchedRick, setSearchedRick] = useState("");
  const [ricks, setRicks] = useState([]);

  useEffect(() => {
    let filteredRicks;
    if (loading === false && data) {
      setRicks(data.characters.results)
      filteredRicks = data.characters.results;
    }
    if (searchedRick !== "" && filteredRicks) {
      console.log(searchedRick)
      filteredRicks = filteredRicks.filter((rick) =>
        rick.name.toLowerCase().includes(searchedRick.toLowerCase())
      );
      setRicks(filteredRicks);
    }
  }, [searchedRick,data]);

  const handleChange = (e) => {
    setSearchedRick(e.target.value);
  };

  if (loading) {
    return <Spinner color={blue[800]} />;
  }
  if (error) {
    return (
      <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
        Error
      </Typography>
    );
  }

  const rickCards = ricks.map((rick) => {
    return (
      <Grid key={rick.id} item sm={6} md={6} sx={{ ml: "auto", mr: "auto" }}>
        <RickCard rick={rick} />
      </Grid>
    );
  });
  return (
    <Fragment>
      <Typography variant="h4" color="primary" sx={{ textAlign: "center" }}>
        {searchedRick}
      </Typography>
      <TextField fullWidth label="Search Rick" onChange={handleChange}  margin="dense"/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {rickCards}
      </Grid>
    </Fragment>
  );
}

export default Ricks;
