import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MovieCreditPage from "./pages/moviecreditsPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import TopMovies from "./pages/topMoviePage";
import HomePage from "./pages/homePage";
import NowPlaying from "./pages/nowPlaying";
import TV from "./pages/TVHome";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchMovies from "./pages/mustWatchMovies"; // NEW


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <Route exact path="/movies/topmovies" component={TopMovies} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies/nowplaying" component={NowPlaying} />
            <Route exact path="/TV" component={TV} />
            <Route exact path="/movies/playlist" component={MustWatchMovies} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/credits/:id" component={MovieCreditPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));