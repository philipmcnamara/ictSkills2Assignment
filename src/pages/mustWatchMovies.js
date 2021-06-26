import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromfavorites";

const MustWatchMovies = () => {
  const {favorites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteMoviePlaylist = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMoviePlaylist.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = favoriteMoviePlaylist.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="My Playlist"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustWatchMovies;