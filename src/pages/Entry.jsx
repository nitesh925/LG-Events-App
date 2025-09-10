import React, { useState } from 'react';
import '../styles/Entry.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
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

const weddingPlans = [
  {
    title: "Elegant Bliss",
    budget: "₹1.5 Lakhs",
    chart: "/requiredImages/engagement-imgs/engagement3.jpg",
    description: "Perfect for intimate weddings. Includes venue, basic decor & photography.",
    requirements: ["50 Guests", "Indoor Venue", "Veg Menu"]
  },
  {
    title: "Royal Grandeur",
    budget: "₹5 Lakhs",
    chart: "/requiredImages/engagement-imgs/engagement5.jpg",
    description: "Ideal for large celebrations with themed decor and premium catering.",
    requirements: ["200 Guests", "Outdoor Venue", "Multi-cuisine Menu"]
  },
  {
    title: "Minimal Chic",
    budget: "₹80,000",
    chart: "/requiredImages/engagement-imgs/engagement1.jpg",
    description: "A budget-friendly plan for a simple and classy wedding event.",
    requirements: ["30 Guests", "Home/Apartment", "Custom Decoration"]
  },
  {
    title: "Classic Romance",
    budget: "₹2.5 Lakhs",
    chart: "/requiredImages/engagement-imgs/engagement6.jpg",
    description: "A timeless package with classic decor, floral arrangements, and traditional photography.",
    requirements: ["100 Guests", "Church/Outdoor Venue", "Veg & Non-Veg Menu"]
  },
  {
    title: "Luxury Dream",
    budget: "₹10 Lakhs",
    chart: "/requiredImages/engagement-imgs/engagement2.jpg",
    description: "For those looking for an extravagant celebration with luxury décor, high-end catering, and live entertainment.",
    requirements: ["500+ Guests", "Grand Venue", "Customized Multi-cuisine Menu"]
  }
];

const Entry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? weddingPlans.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === weddingPlans.length - 1 ? 0 : prevIndex + 1));
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booking'); // replace '/booking' with your desired route
  };
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
          <button className="book-btn" onClick={handleClick}>
          Book Your Event Now
        </button>
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

        <div className="steps-container">
          {steps.map((step, index) => {
            const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
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
          <h2 className='rch'>What we provide ?</h2>
          <div className="scroll-track">
            <div className="scroll-content">
              {skills.concat(skills).map((skill, index) => (
                <span key={`${skill.id}-${index}`} className="skill-items">
                  <span className="first-letter">{skill.name.charAt(0)}</span>
                  <span className="rest-letters">{skill.name.slice(1)}</span>
                  &nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="wedding-plan-section">
  <h2 className="plan-heading">Sample Wedding Plans</h2>

  <div className="wedding-carousel">
    
        <ArrowLeftIcon className="carousel-arrow left" fontSize="large" onClick={handlePrev} />
    
    <div className="wedding-card">
      <h3>{weddingPlans[currentIndex].title}</h3>
      <img src={weddingPlans[currentIndex].chart} alt={`${weddingPlans[currentIndex].title} chart`} />
      <p className="budget">Budget: {weddingPlans[currentIndex].budget}</p>
      <p>{weddingPlans[currentIndex].description}</p>
      <ul>
        {weddingPlans[currentIndex].requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
    </div>
    
<ArrowRightIcon className="carousel-arrow right" fontSize="large" onClick={handleNext} />

  </div>

  <div className="carousel-indicators">
    {weddingPlans.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      ></span>
    ))}
  </div>
</div>

        <div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          {[
            {
              question: "What types of events do you organize?",
              answer: "We specialize in weddings, birthdays, housewarming ceremonies, corporate events, and more!",
            },
            {
              question: "Do you offer customizable event packages?",
              answer: "Yes, all our packages are tailored to your preferences, budget, and theme.",
            },
            {
              question: "How far in advance should I book?",
              answer: "We recommend booking at least 2-3 months in advance to secure your preferred date and services.",
            },
            {
              question: "Can you help with venue selection?",
              answer: "Absolutely! We help find and book the perfect venue that suits your event size, location, and vibe.",
            },
            {
              question: "Do you provide catering, photography, and decor?",
              answer: "Yes, we provide end-to-end services including catering, decoration, photography, entertainment, and more.",
            },
            {
              question: "Are there any hidden costs?",
              answer: "No. We believe in transparency. All costs are clearly mentioned in your custom proposal.",
            }
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <details>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Entry;
