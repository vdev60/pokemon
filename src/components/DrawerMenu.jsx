import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import { yellow, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Button color="inherit" component={Link} to="/pokemons">
              Pokémon
            </Button>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Button color="inherit" component={Link} to="/rick-and-morty">
              Rick and Morty
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <Toolbar
        sx={{
          ml: "auto",
          mr: "auto",
          background: grey[700],
          justifyContent: "center",
        }}
      >
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ color: yellow[400] }} />
        </IconButton>
      </Toolbar>
    </>
  );
}
export default DrawerComponent;
