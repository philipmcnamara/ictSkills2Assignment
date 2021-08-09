import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import Button from '@material-ui/core/Button';


export default function MovieCredits({ movie }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(credits)

  return (
    <Button variant="contained" color="default" onClick={MovieCredits}>
      <Link
        to={{
          pathname: `/credits/${movie.id}`,
          state: {
            movie: movie,
            credits: credits,
          },
        }}
      >
        Click Here to View Credits
      </Link>
    </Button>

);
}