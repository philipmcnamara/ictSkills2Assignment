import React, { useEffect, useState }  from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
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
  const [stars, setStars] = useState([]);
  useEffect(() => {
    getMovieCredits(movie.id).then((castAndCrew) => {
      setStars(castAndCrew.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(stars[1]);
  console.log(stars[2]);
  const myJSON = JSON.stringify(stars[0]);
  let castCards = stars.map((m) => (
    
<Card className={classes.card}>
      <CardHeader
      className={classes.header}
      title={
        <Typography variant="h5" component="p">
          {m.name}{" "}
        </Typography>
      }
    />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {m.character}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {"  "} {stars.profile_path}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ));
  return castCards;
  
};