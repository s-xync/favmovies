import {
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_ERROR,
  TOGGLE_FAVOURITE,
  HYDRATE_FAVOURITES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_ERROR
} from "../types";

const initialState = {
  moviesArray: null,
  moviesError: false,
  favourites: [],
  movieDetails: null,
  movieError: false
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
        const tempFavourites = state.favourites.filter(
          movieId => action.payload !== movieId
        );
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
    case HYDRATE_FAVOURITES:
      return {
        ...state,
        favourites: [...action.payload]
      };
    case GET_MOVIE_DETAILS:
      const movie = { ...action.payload };
      return {
        ...state,
        movieError: false,
        movieDetails: {
          id: movie.id,
          title: movie.original_title,
          overview: movie.overview,
          poster: movie.poster_path,
          backdrop: movie.backdrop_path,
          release_date: new Date(movie.release_date)
            .toDateString()
            .split(" ")
            .splice(1, 3)
            .join(" "),
          cast: movie.cast.map(person => ({
            name: person.name,
            profile: person.profile_path,
            character: person.character
          })),
          crew: movie.crew.map(person => ({
            name: person.name,
            profile: person.profile_path,
            job: person.job
          }))
        }
      };
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movieError: true
      };
    default:
      return state;
  }
};
