import {
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_ERROR,
  TOGGLE_FAVOURITE,
  HYDRATE_FAVOURITES
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
