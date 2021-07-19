import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
        setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
          <Link
            to={{
              pathname: `/credits/${movie.id}`,
              state: {
                movie: movie,
              },
            }}
          >
          </Link>
  );
}