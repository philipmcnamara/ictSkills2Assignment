import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";

const TVList = ( {TVs, action }) => {
  let TVCards = TVs.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return TVCards;
};

export default TVList;