import React from 'react'
import '../styles/Entry.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const steps = [
  {
    title: "Share your requirements",
    description: "Tell us your event date, budget, location, type of venue, guest count, etc.",
  },
  {
    title: "Get a personalised proposal",
    description: "Get the best deals on venue, catering, and decor as per your preferences.",
  },
  {
    title: "Confirm and book",
    description: "Pay a minimum amount & lock the date.",
  },
];
const skills = [
  { id: 'engagement', name: 'Engagement', image: '/images/wedding.png' },
  { id: 'marriage', name: 'Wedding', image: '/images/marriage.png' },
  { id: 'birthday', name: 'Birthday', image: '/images/birthday.png' },
  { id: 'photography', name: 'Photography', image: '/images/photography.png' },
  { id: 'car', name: 'Rentals', image: '/images/car.png' },
  { id: 'catering', name: 'Catering', image: '/images/catering.png' },
  { id: 'events', name: 'Corporate', image: '/images/events.png' },
  { id: 'lights', name: 'Lighting', image: '/images/lights.png' },
  { id: 'branding', name: 'Branding', image: '/images/branding.png' },
  { id: 'stage', name: 'Decoration', image: '/images/stage.png' },
  { id: 'house', name: 'Inauguration', image: '/images/house.png' },
  { id: 'flower', name: 'Florals', image: '/images/flower.png' },
  { id: 'proposal', name: 'Proposal', image: '/images/proposal.png' },
];

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
          <br />
          <button className="book-btn">Book Your Event Now</button>
        </div>
      </div>

      <div className='minidata'>
        <h3>Wedding Planning</h3>
        <ArrowLeftIcon />
        <h3>Birthday Party</h3>
        <ArrowRightIcon />
        <h3>House Warming</h3>
      </div>

      <div className='secondhalf'>
        <h2>Step-by-Step Guide</h2>
        <p>Easy to plan your event</p>
        <img src="/images/secondimg.png" className='img' alt="steps-img" />

        {/* 👇 Add Steps with Animation 
        <div className="scroll-indicator">
  <p>Scroll down</p>
  <KeyboardDoubleArrowDownIcon fontSize="large" />
</div>*/}

<div className="steps-container">
  {steps.map((step, index) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: false,
    });

    return (
      <motion.div
        key={index}
        ref={ref}
        className="step-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
      >
        <div className="step-header">
  <div className="step-number">{index + 1}</div>
  <h3 className="step-title">{step.title}</h3>
</div>
<p className='step-description'>{step.description}</p>

      </motion.div>
    );
  })}
</div>

      </div>


      <div className='thirdhalf'>
      
<div className="running-commentary-loop">
  <div className="scroll-track">
    <div className="scroll-content">
      {skills.map(skill => (
        <span key={skill.id} className="skill-items">
          {skill.name} &nbsp; | &nbsp;
        </span>
      ))}
      {skills.map(skill => (
        <span key={`${skill.id}-repeat`} className="skill-items">
          {skill.name} &nbsp; | &nbsp;
        </span>
      ))}
    </div>
  </div>
</div>



      </div>
    </>
  )
}

export default Entry;