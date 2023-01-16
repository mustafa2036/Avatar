import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <footer className='py-5 text-center text-white'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text-center py-3">
                    <h1 className="mb-4 text-uppercase">Location</h1>
                    <p>2215 John Daniel Drive
                      <br />
                      Clark, MO 65243
                    </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center py-3">
                <h1 className="mb-4 text-uppercase">Around the Web</h1>
                <a href="#" className='btn btn-outline-light soical-media'>
                <i className="fa-brands fa-facebook-f"></i></a>    
                <a href="#" className='btn btn-outline-light soical-media'>
                <i className="fa-brands fa-twitter"></i></a>    
                <a href="#" className='btn btn-outline-light soical-media'>
                <i className="fa-brands fa-linkedin"></i></a>    
                <a href="#" className='btn btn-outline-light soical-media'>
                <i className="fa-brands fa-dribbble"></i></a>    
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center py-3">
                <h1 className="mb-4 text-uppercase">About Freelancer</h1>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='text-white py-4 text-center bg'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
               <small>Copyright © Your Website 2021</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
