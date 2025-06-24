import React from 'react';
import {useState, useEffect} from 'react';
import MovieList from './MovieList';


const Home = () => {
  const [movies, setMovies] = useState(null)

useEffect(()=>{
  fetch('http://localhost:8000/movies')
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data)
    setMovies(data)
  })
}, [])


  
 
  return (
    <div className='home'>
    {movies && <MovieList movies = {movies} title = "Movie's Blo;!!!" />}


    </div>
  )     
}

export default Home