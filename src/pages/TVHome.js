import React from "react";
import PageTemplate from "../components/templateTVListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTV} from '../api/tmdb-api';


const TV = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getTV)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TVs = data.results;

  return (
    <PageTemplate
      title="Discover Top TV"
      TVs={TVs}
    />
);
};

export default TV;