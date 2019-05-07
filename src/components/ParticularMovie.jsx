import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/ParticularMovie.css";
import {
  getMovieDetails,
  clearMovieDetails
} from "../store/actions/moviesActions";
import constants from "../config/constants";

import WaitingSpinner from "./WaitingSpinner";
import MovieCard from "./MovieCard";

class ParticularMovie extends Component {
  componentWillMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearMovieDetails();
  }

  render() {
    if (this.props.movieDetails) {
      const { movieDetails } = this.props;
      return (
        <div className="container">
          <h1>{movieDetails.title}</h1>
          <hr />
          <div className="backdrop-image">
            <img
              src={constants.tmdbImagesApi + movieDetails.backdrop}
              alt="Movie Backdrop"
            />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 movie-card">
              <MovieCard movie={movieDetails} />
            </div>
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
    movieDetails: movies.movieDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: movieId => dispatch(getMovieDetails(movieId)),
    clearMovieDetails: () => dispatch(clearMovieDetails())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticularMovie);
