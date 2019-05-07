import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/FavouriteMovies.css";

import MovieCard from "./MovieCard";
import WaitingSpinner from "./WaitingSpinner";

class FavouriteMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.moviesArray) {
      return (
        <div className="container">
          <h1>Favourite Movies</h1>
          <hr />
          <div className="row">
            {this.props.moviesArray
              .filter(movie => this.props.favourites.includes(movie.id))
              .map(movie => (
                <div key={movie.id} className="col-md-4 col-sm-12 movie-card">
                  <MovieCard movie={movie} />
                </div>
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
    moviesError: movies.moviesError,
    favourites: movies.favourites
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteMovies);
