import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieCredit from "../components/movieCredit";

const MovieCreditPage = (props) => {
  const {movie, credit} = props.location.state
  return (
    <PageTemplate movie={movie}>
      <MovieCredit credit={credit} />
    </PageTemplate>
  );
};

export default withRouter(MovieCreditPage);