import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemons from "./components/Pokemons/Pokemons";
import Ricks from "./components/Ricks/Ricks";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import RickPage from "./components/Ricks/RickPage";
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              <Route path="/rick-and-morty">
                <Ricks />
              </Route>
              <Route exact path="/rick/:rickId" component={RickPage}/>
            </Switch>
          </Container>
        </React.StrictMode>
      </Router>
    </ApolloProvider>
  );
}

export default App;
