import React from 'react'
import loading from './loading.gif';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const MovieDetails = (Movies, title) => {
    const {id} = useParams()
    const {data: movies, isPending, error} = useFetch('http://localhost:8000/movies/');
   

  return (
    <div className='Blog-details'>
    {isPending && <div className='image'><img src={loading} alt="image"/></div>}
    {error && <div>{error}</div>}
    {movies && (
     <article>
       <h2>{movies.title}</h2>
       <div>{movies.body}</div>
       <h2>Acted By: {movies.Actor}</h2>
     </article>
   )}
      <h2>Blog Deetails - {id}</h2>
    </div>
  )
 }

export default MovieDetails