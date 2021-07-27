import React, { useState } from "react";
import Header from "../headerTVList";
import FilterCard from "../filterTVsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TVList from "../TVList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function TVListPageTemplate({ TVs, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTVs = TVs
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TVList action={action} TVs={displayedTVs}></TVList>
      </Grid>
    </Grid>
  );
}
export default TVListPageTemplate;