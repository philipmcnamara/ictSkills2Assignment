import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTopMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const TopMovies = (props) => {
  // useQuery used to cache upcoming movies page data
  const { data, error, isLoading, isError } = useQuery('upcoming', getTopMovies)
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;
  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))

  return (
    <PageTemplate
      title='Top Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default TopMovies;