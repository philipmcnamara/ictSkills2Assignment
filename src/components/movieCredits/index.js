import React, { useEffect, useState }  from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import MovieCredit from "../movieCredit";
import Grid from "@material-ui/core/Grid";


export default function MovieCredits({ movie }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(movie.id).then((castAndCrew) => {
      setCast(castAndCrew.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cast)

  let castCards = cast.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieCredit key={m.id} star={m}  />
    </Grid>
  ));
  return castCards;
  
};