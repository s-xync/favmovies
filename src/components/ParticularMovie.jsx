import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/ParticularMovie.css";
import { getMovieDetails } from "../store/actions/moviesActions";

class ParticularMovie extends Component {
  componentWillMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }

  render() {
    return <div>ParticularMovie</div>;
  }
}

const mapStateToProps = ({ movies }) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: movieId => dispatch(getMovieDetails(movieId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticularMovie);
