import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import "./App.css";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="not-found"> </Redirect>
        </Switch>
      </main>
    );
  }
}

export default App;
