import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='title bg-light text-dark py-5'>
      <div className="box-contact">
        <h1 className='fw-bold text-uppercase'>Contact Me</h1>
        <span className='my-3'><i className="fa-solid fa-star"></i></span>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-box mb-2">
                <input type="text" id='name' className='form-control h-65 py-2 w-50' placeholder='Name'/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-box mb-2">
                <input type="text" className='form-control h-65 py-2 w-50' placeholder='Email Address'/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-box mb-2">
                <input type="text" className='form-control h-65 py-2 w-50' placeholder='Phone Number'/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-box mb-2">
                <textarea type="text" className='form-control py-2 w-50' 
                placeholder='Message'>
                </textarea>
              </div>
            </div>
            <div>
              <button className='btn btn-info btns py-4 px-4'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
