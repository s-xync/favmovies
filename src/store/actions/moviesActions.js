import {
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_ERROR,
  TOGGLE_FAVOURITE,
  HYDRATE_FAVOURITES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_ERROR,
  CLEAR_MOVIE_DETAILS
} from "../types";
import constants from "../../config/constants";
import axios from "axios";

export const getNowPlaying = () => dispatch => {
  axios
    .get(constants.tmdbMovieApi + "/now_playing", {
      params: {
        api_key: constants.tmdbApiKey
      }
    })
    .then(response => {
      if (response.data.results) {
        dispatch({
          type: GET_NOW_PLAYING,
          payload: response.data.results
        });
      } else {
        dispatch({
          type: GET_NOW_PLAYING_ERROR,
          payload: null
        });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_NOW_PLAYING_ERROR,
        payload: null
      });
    });
};

export const toggleFavourite = movieId => dispatch => {
  dispatch({
    type: TOGGLE_FAVOURITE,
    payload: movieId
  });
};

export const hydrateFavourites = favourites => dispatch => {
  dispatch({
    type: HYDRATE_FAVOURITES,
    payload: favourites
  });
};

export const getMovieDetails = movieId => async dispatch => {
  try {
    let allMovieDetails = await axios.get(
      constants.tmdbMovieApi + "/" + movieId,
      {
        params: {
          api_key: constants.tmdbApiKey
        }
      }
    );

    allMovieDetails = allMovieDetails.data;

    let allCastAndCrewDetails = await axios.get(
      constants.tmdbMovieApi + "/" + movieId + "/credits",
      {
        params: {
          api_key: constants.tmdbApiKey
        }
      }
    );

    allCastAndCrewDetails = allCastAndCrewDetails.data;

    if (allMovieDetails && allCastAndCrewDetails) {
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: {
          ...allMovieDetails,
          cast: allCastAndCrewDetails.cast,
          crew: allCastAndCrewDetails.crew
        }
      });
    } else {
      dispatch({
        type: GET_MOVIE_DETAILS_ERROR,
        payload: null
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MOVIE_DETAILS_ERROR,
      payload: null
    });
  }
};

export const clearMovieDetails = () => dispatch => {
  dispatch({
    type: CLEAR_MOVIE_DETAILS,
    payload: null
  });
};
