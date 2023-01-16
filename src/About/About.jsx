import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
        <div className="box">
          <h1 className='fw-bold text-uppercase'>About</h1>
          <span className='my-3'><i className="fa-solid fa-star"></i></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 ms-auto">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-lg-4 me-auto">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
