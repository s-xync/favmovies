import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./css/NowPlayingMovies.css";
import constants from "../config/constants";

class NowPlayingMovies extends Component {
  waitingSpinner = () => {
    return (
      <div className="waiting-spinner">
        <i className="fas fa-spinner fa-spin" />
      </div>
    );
  };

  movieCard = movie => {
    return (
      <div className="col-md-4 col-sm-12" key={movie.id}>
        <div className="card">
          <img
            className="card-img-top"
            src={constants.tmdbImagesApi + movie.poster}
            alt="movie poster"
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {movie.release_date}
            </h6>
            <p className="card-text">{movie.overview}</p>
            <i className="far fa-heart heart-button" />
            <Link className="link-tag" to={"/movie/" + movie.id}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.moviesArray) {
      return (
        <div className="container">
          <h1>Now Playing</h1>
          <hr />
          <div className="row">
            {this.props.moviesArray.map(movie => this.movieCard(movie))}
          </div>
        </div>
      );
    } else {
      return this.waitingSpinner();
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
