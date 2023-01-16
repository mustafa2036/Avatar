import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <div className="container box">
          <img src="/Images/avataaars.svg" className='w-100 h-25 mb-5 rounded-circle' alt="" />
          <h1 className='text-uppercase fw-bold'>Start React</h1>
          <span className='my-3'><i className="fa-solid fa-star"></i></span>
          <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
