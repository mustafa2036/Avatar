import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar fw-bold navbar-expand-lg py-4">
            <div className="container">
                <Link className="navbar-brand" to='home'>Start React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">Menu
                  <i className='fas fa-bars'></i>
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active px-3" aria-current="page" to="portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-3" aria-current="page" to="about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-3" aria-current="page" to="movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-3" aria-current="page" to="contact">Contact</Link>
                  </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
