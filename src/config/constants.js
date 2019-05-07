const defaultConfig = {
  tmdbApiKey: process.env.REACT_APP_TMDB_API_KEY,
  tmdbMovieApi: process.env.REACT_APP_TMDB_MOVIE_API_URL,
  tmdbImagesApi: process.env.REACT_APP_TMDB_IMAGES_API_URL
};

export default {
  ...defaultConfig
};
