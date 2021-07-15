import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const FindSimilarIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  
  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToPlaylist}>
      <SearchIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default FindSimilarIcon;