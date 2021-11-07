import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { yellow, grey } from "@mui/material/colors";
import DrawerComponent from "./DrawerMenu";
function Navbar() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      {matches ? (
        <DrawerComponent/>
      ) : (
        <AppBar position="static" sx={{ background: grey[700] }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon sx={{ color: yellow[400] }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Multi
            </Typography>
            <Button color="inherit">Pokémon</Button>
            <Button color="inherit">Rick and Morty</Button>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}

export default Navbar;
