import React from 'react';

const MovieList = ({movies, title}) => {
  return (
  <div className='blog-list'>
    <br></br>
    <h2>{title}</h2>
     {movies.map((movie) => (
        <div className='blog preview' key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.body}</p>
          <p>Actor: {movie.Actor}</p>
          <p>year: {movie.year}</p>
         
        </div>
      ))}
    </div>
    )
}


export default MovieList;
