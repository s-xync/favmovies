import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Navbar from "./components/Navbar";
import NowPlayingMovies from "./components/NowPlayingMovies";
import FavouriteMovies from "./components/FavouriteMovies";
import ParticularMovie from "./components/ParticularMovie";

import { getNowPlaying } from "./store/actions/moviesActions";

class App extends Component {
  componentWillMount() {
    this.props.getNowPlaying();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    getNowPlaying: () => dispatch(getNowPlaying())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
