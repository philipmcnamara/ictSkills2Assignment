import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TVCard({ TV, action }) {
  const classes = useStyles();
  const [TV, setTV] = useState([]);
  useEffect(() => {
    getTVShow(TV.id).then((TVName) => {
      setCast(TVName.name);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(TV[1]);

  let TVCards = TV.map((m) => (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}

      title={
        <Typography variant="h5" component="p">
          {m.original_name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
            TV.poster_path
            ? `https://image.tmdb.org/t/p/w500/${m.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {TV.first_air_date}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
      {action(TV)}
        <Link to={`/TV/${m.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  ));

  return TVCards;

};