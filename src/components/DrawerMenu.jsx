import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { yellow,grey } from "@mui/material/colors";


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
            <ListItemText>Home</ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>Pokémon</ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>Rick and Morty</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Toolbar sx={{ ml: "auto", mr: "auto", background: grey[700], justifyContent: 'center'}}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ color: yellow[400] }}/>
        </IconButton>
      </Toolbar>
    </>
  );
}
export default DrawerComponent;
