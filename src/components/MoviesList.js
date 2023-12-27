import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';
import Loader from './Loader';

const MovieList = ({loading, movies}) => {
  console.log("movies", loading,movies);
  return (
    <ul className={classes['movies-list']}>
      {!loading ? (
        movies.map((movie) => (
          <Movie
          key={movie.created}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          />
          ))
          ):(
            <Loader/>
          )}
    </ul>
  );
};

export default MovieList;
