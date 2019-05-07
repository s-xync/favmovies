import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import "./App.css";
import Navbar from "./components/Navbar";
import NowPlayingMovies from "./components/NowPlayingMovies";
import FavouriteMovies from "./components/FavouriteMovies";
import ParticularMovie from "./components/ParticularMovie";

import {
  getNowPlaying,
  hydrateFavourites
} from "./store/actions/moviesActions";

class App extends Component {
  componentWillMount() {
    this.props.getNowPlaying();
    if (localStorage.getItem("favourites")) {
      const favourites = JSON.parse(localStorage.getItem("favourites"));
      this.props.hydrateFavourites(favourites);
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.favourites, this.props.favourites)) {
      localStorage.setItem("favourites", JSON.stringify(this.props.favourites));
    }
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

const mapStateToProps = ({ movies }) => {
  return {
    favourites: movies.favourites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNowPlaying: () => dispatch(getNowPlaying()),
    hydrateFavourites: favourites => dispatch(hydrateFavourites(favourites))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
