import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function RickCard({ rick }) {
  return (
    <Card sx={{ maxWidth: 345, ml:'auto', mr:'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={rick.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {rick.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {rick.species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RickCard;
