import React from 'react';
import { Link } from 'react-router-dom'

const MovieList = ({movies, title}) => {
  return (
  <div className='blog-list'>
    <h2>{title}</h2>
     {movies.map((movie) => (
        <div className='blog-preview' key={movie.id}>
          <Link to={'/movies/${movie.id}'}>
          <h2>{movie.title}</h2>
          <p>Acted by: {movie.Actor}</p>
          </Link>
        </div>
      ))}
    </div>

    )
}


export default MovieList;
