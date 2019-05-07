# FavMovies

### You can access the live version of this project [here](https://favmovies.surge.sh/).

With this app, you can view the list of movies that are playing now in theatres. You can also favourite and unfavourite the movies. All your favourite movies can be viewed in a seperate tab. You can also view full details of a movie including cast and crew.

The app uses React / Redux for the front-end.
The app uses LocalStorage of the browser to persist the user favourites.
The app uses Bootstrap for styled components like grids and cards.
This app uses [The Movie DB](https://www.themoviedb.org) API.

---

To use this app locally, first create `.env.local` file.
Go to [The Movie DB](https://www.themoviedb.org) and create an account to get the API key.
Copy the following details into the file.
```
REACT_APP_TMDB_API_KEY=<YOUR_TMDB_API_KEY>
REACT_APP_TMDB_MOVIE_API_URL=https://api.themoviedb.org/3/movie
REACT_APP_TMDB_IMAGES_API_URL=https://image.tmdb.org/t/p/original
```
Then run the follwing commands. `yarn install` and `yarn start`.

If everything goes well, you should able to access the app on your browser.

### You can access the live version of this project [here](https://favmovies.surge.sh/).

#### Thanks!!
