import React from "react";
import PageTemplate from "../components/templateTVListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTV} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TV = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getTV)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TVs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = TVs.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Top TV"
      TVs={TVs}
      action={(TV) => {
        return <AddToFavoritesIcon TV={TV} />
      }}
    />
);
};

export default TV;