import React, { useEffect, useState }  from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(movie.id).then((movieCast) => {
      setCast(movieCast.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cast[1]);

  const myJSON = JSON.stringify(cast[0]);
  let castCards = cast.map((m) => (
    
<>
    <Typography variant="h5" component="h3">
     _________________________________________ <br></br> {m.name}
    </Typography>
    
    <Typography variant="h6" component="p">
    as {m.character}
  </Typography>
  </>
  ));
  return castCards;
  
};