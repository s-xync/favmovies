import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Img from "react-image";
import { Spinner } from "reactstrap";

import "./css/MovieCard.css";

import constants from "../config/constants";
import { toggleFavourite } from "../store/actions/moviesActions";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        <Img
          src={constants.tmdbImagesApi + movie.poster}
          className="card-img-top"
          loader={
            <div className="waiting-spinner-outer">
              <Spinner
                color="dark"
                style={{ marginTop: "2rem", height: "3rem", width: "3rem" }}
              />
            </div>
          }
          alt="Movie Poster"
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
          {!movie.backdrop && (
            <Link className="link-tag" to={"/movie/" + movie.id}>
              More Info
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    favourites: movies.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavourite: (movieId) => dispatch(toggleFavourite(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
