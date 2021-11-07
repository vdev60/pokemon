import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemons from "./components/Pokemons/Pokemons";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Navbar />
        <Container sx={{ mt: 5 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pokemons">
              <Pokemons />
            </Route>
          </Switch>
        </Container>
      </React.StrictMode>
    </Router>
  );
}

export default App;
