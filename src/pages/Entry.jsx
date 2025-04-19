import React from 'react'
import '../styles/Entry.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Entry = () => {
  return (
    <>
    <div className='firsthalf'>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="home-video">
          <source src="/videos/sampleVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-text">
            <h1>Creating Magical Moments</h1>
        </div>
        <div className="numcontainer">
            <div className='num1'>
            <h3>100+</h3>
            <p>events done</p>
            </div>
            <div className='num3'>
            <h3>4.5/5</h3>
            <p>google ratings</p>
            </div>
            <div className='num3'>
            <h3>1000+</h3>
            <p>happy customers</p>
            </div>
        </div>

        <div className="book-event">
        <div className="bounce-arrow">
    <KeyboardDoubleArrowDownIcon fontSize="large" />
  </div>
  <br></br>
            <button className="book-btn">Book Your Event Now</button>
        </div>

        </div>

    <div className='minidata'>
        <h3>Wedding Planning</h3>
        <ArrowLeftIcon/>
        <h3>Birthday Party</h3>
        <ArrowRightIcon/>
        <h3>House Warming</h3>
    </div>


    <div className='secondhalf'>
        <h2>Step-by-Step Guide</h2>
        <p>Easy to plan your event</p>
        <img src="/images/secondimg.png" className='img'/>
    </div>
    </>
  )
}

export default Entry;
