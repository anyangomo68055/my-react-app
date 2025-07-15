import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to= "/">
      <h1>My_Movies</h1>
      </Link>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create">New BloG</Link>
      </div>
    </div>
  )
}

export default Navbar

