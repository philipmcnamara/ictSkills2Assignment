import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";


const MustWatchMovies = () => {
  const {playlist: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const playlistQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = playlistQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = playlistQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="My Must Watch Playlist"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylist movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustWatchMovies;