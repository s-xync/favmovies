import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import NowPlayingMovies from "./components/NowPlayingMovies";
import FavouriteMovies from "./components/FavouriteMovies";
import ParticularMovie from "./components/ParticularMovie";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/now-playing" exact component={NowPlayingMovies} />
            <Route path="/" exact component={NowPlayingMovies} />
            <Route path="/favourites" exact component={FavouriteMovies} />
            <Route path="/movie/:id" exact component={ParticularMovie} />
            <Route component={NowPlayingMovies} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
