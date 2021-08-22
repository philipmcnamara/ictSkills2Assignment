# Assignment - ReactJS app.

Name: Philip McNamara

## Overview.

...... State the app concept and objectives. If it's the Movies Fan app extension, only state the additional objectives .........

The objectives was to add a few additional pages such as , upcoming movies, Top rated movies, now playing in cinemas along witha TV page and addition of Cast into into the details pages. 


...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features...... 
 
 + Upcoming Movies
 + Top Rated Movies
 + Now Playing in Cinemas
 + Cast Details in the Movie Details Page
 + Must Watch Playlist page with functionality to add to from the Upcoming Movies Page.
 + TV Pages Built but an error in the render has left a lot of that work meaningless. 

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.


https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
- Returns all the TV info I was lokoing to load into my TV page


https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
- Returns all the info On the cast I loaded into the Details page

eg : Cast
        - name
        - character

https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
- Returns the latest movies

https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
- Returns the Top Rated Movies

https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
- Returns the Upcomig Movies

## App Design.

### Component catalogue.

storybook.png is updated to contian this 

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /movies/upcoming - displays all upcaoming Movies
+ GET /movies/topmovies - displays highest rated movies
+ GET /movies/nowplaying - displays movies now in the cinema or streaming
+ GET /movies/playlist - displays new playlist page with added movies from upcoming if applicaable
+ POST credits/:id - takes in movies ID and displays the cast list 
+ GET "/TV" component={TV} - unsucessfully displays TV info from the TV api

## Independent learning (If relevant).

I spent a long time learing about hooks and adding in buttons as a means to creat an entirly new "Cast" page, but my button was linked incorrectly into the hooks function. This resulted in me switching to adding the cast to the movie detail instead so this info was untimatly not used. But the changes and progress are still avaailable in the git logs. 

https://material-ui.com/components/buttons/

https://reactjs.org/docs/hooks-intro.html