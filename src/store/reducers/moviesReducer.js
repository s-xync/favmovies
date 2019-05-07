import {
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_ERROR,
  TOGGLE_FAVOURITE
} from "../types";

const initialState = {
  moviesArray: null,
  moviesError: false,
  favourites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      const movies = action.payload.map(movie => ({
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        poster: movie.poster_path,
        release_date: new Date(movie.release_date)
          .toDateString()
          .split(" ")
          .splice(1, 3)
          .join(" ")
      }));
      return {
        ...state,
        moviesArray: [...movies],
        moviesError: false
      };
    case GET_NOW_PLAYING_ERROR:
      return {
        ...state,
        moviesError: true
      };

    case TOGGLE_FAVOURITE:
      if (state.favourites.includes(action.payload)) {
        const tempFavourites = state.favourites.filter(movieId => {
          if (action.payload !== movieId) {
            return movieId;
          }
        });
        return {
          ...state,
          favourites: [...tempFavourites]
        };
      } else {
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        };
      }

    default:
      return state;
  }
};
