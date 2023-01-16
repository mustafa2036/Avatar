import React, { Component } from 'react'
import {Routes , Route} from 'react-router-dom'
import Navbar from './Header/Navbar'
import Home from './Home/Home'
import About from './About/About'
// import Parent from './Grand/Parent'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
// import Gallery from './Gallery/Gallery'
import NotFound from './NotFound/NotFound'
import Port from './Portfilo/Port'
import Movies from './Movies/Movies'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='portfolio' element={<Port/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='movies' element={<Movies/>}/>
            {/* <Route path='parent' element={<Parent/>}/>
            <Route path='gallery' element={<Gallery/>}/> */}
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    )
  }
}
