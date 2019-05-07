import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./css/FavouriteMovies.css";

import constants from "../config/constants";
import { toggleFavourite } from "../store/actions/moviesActions";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-4 col-sm-12">
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
            <i
              className={
                (this.props.favourites.includes(movie.id) ? "fas" : "far") +
                " fa-heart heart-button"
              }
              onClick={() => {
                this.props.toggleFavourite(movie.id);
              }}
            />
            <Link className="link-tag" to={"/movie/" + movie.id}>
              More Info
            </Link>
          </div>
        </div>
      </div>
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
    toggleFavourite: movieId => dispatch(toggleFavourite(movieId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);