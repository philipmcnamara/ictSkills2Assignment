import React, { useState } from "react";
export const TVsContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )



  const addToFavorites = (TV) => {
    setFavorites([...favorites,TV.id])
  };

  // We will use this function in a later section
  const removeFromFavorites = (TV) => {
    setFavorites( favorites.filter(
      (mId) => mId !== TV.id
    ) )
  };

  const addToPlaylist = (TV) => {
    setPlaylist([...playlist, TV.id] )
    console.log(playlist);
  };

    // We will use this function in a later section
    const removeFromPlaylist = (TV) => {
      setPlaylist( playlist.filter(
        (mId) => mId !== TV.id
      ) )
    };

  return (
    <TVsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        playlist,
        addToPlaylist,
        removeFromPlaylist
      }}
    >
      {props.children}
    </TVsContext.Provider>
  );
};

export default MoviesContextProvider;