import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/NowPlayingMovies.css";

import MovieCard from "./MovieCard";
import WaitingSpinner from "./WaitingSpinner";

class NowPlayingMovies extends Component {
  render() {
    if (this.props.moviesArray) {
      return (
        <div className="container">
          <h1>Now Playing</h1>
          <hr />
          <div className="row">
            {this.props.moviesArray.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      );
    } else {
      return <WaitingSpinner />;
    }
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    moviesArray: movies.moviesArray,
    moviesError: movies.moviesError
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingMovies);
