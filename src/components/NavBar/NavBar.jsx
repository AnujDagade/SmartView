import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar({setSearchTerm}) {
  return (
    <header>
      <div className='brand'>
        Smart View
      </div>
      <form className='form-nav' >
         <input
         className='word-search'
                  type="text"
                  placeholder="Enter a word"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
           
                
            
      </form>
      <nav>
        <Link to="/" className="title">Home</Link>
        <Link to="/login" className="title">Login</Link>
        <Link to="/upload" className="title">Add Image</Link>
      </nav>
    </header>
  )
}
