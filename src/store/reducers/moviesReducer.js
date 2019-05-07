import { GET_NOW_PLAYING, GET_NOW_PLAYING_ERROR } from "../types";

const initialState = {
  movies: null,
  moviesError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      const movies = action.payload.map(movie => ({
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        poster: movie.poster_path
      }));
      return {
        ...state,
        movies: [...movies],
        moviesError: false
      };
    case GET_NOW_PLAYING_ERROR:
      return {
        ...state,
        moviesError: true
      };
    default:
      return state;
  }
};
