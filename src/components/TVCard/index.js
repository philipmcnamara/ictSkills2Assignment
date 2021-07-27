import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import img from '../../images/film-poster-placeholder.png';
import { TVsContext } from "../../contexts/TVsContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TVCard({ TV, action }) {
  const classes = useStyles();
  const { favorites, addToFavorites } = useContext(TVsContext);
  const { playlist, addToPlaylist } = useContext(TVsContext);

  if (favorites.find((id) => id === TV.id)) {
    TV.favorite = true;
  } else {
    TV.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(TV);
  };

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    addToPlaylist(TV);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        TV.favorite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />

          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {TV.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
            TV.poster_path
            ? `https://image.tmdb.org/t/p/w500/${TV.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {TV.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {TV.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
      {action(TV)}
        <Link to={`/TV/${TV.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
}