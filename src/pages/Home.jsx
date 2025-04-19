import React, { useState } from 'react';
import '../styles/Home.css'; // Ensure you have the CSS file
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
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

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  
 
  const renderCards = () => {
    const skillsToRender = searchQuery ? filteredSkills : skills;
  
    return skillsToRender.map((skill) => (
      <Link to={`/services/${skill.id}`} key={skill.id} className="card">
        <img src={skill.image} alt={skill.name} className="card-image" />
        <h3>{skill.name}</h3>
      </Link>
    ));
  };

  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="home-video">
          <source src="/videos/sampleVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="hero-text">Effortless Event Planning, All in One Place!</h1>
      <p className="hero-subtext">
        Book venues, catering, décor, photography, and more with ease. From weddings to corporate events, we make every moment unforgettable. Start planning today!
      </p>

      <div className="home-container">
        {searchQuery && filteredSkills.length > 0 && (
          <div className="suggestions-container">
            <div className="suggestions-wrapper">
              {filteredSkills.map((skill) => (
                <div key={skill.id} className="suggestion-item">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="cards-container">{renderCards()}</div>
      </div>

      <h1 className="home-heading2">Turn your special moments into timeless memories</h1>

      <div className="image-text-container">
        <img src="/images/wed1.jpg" alt="Pre-Wedding Events" className="image" />
        <div className="text-content">
          <h3>Pre-Wedding Events</h3>
          <p>Celebrate love with unforgettable pre-wedding events! From the joyous Engagement to the artistic beauty of Mehendi, the lively beats of Sangeet, and the sacred rituals of Haldi, every moment is crafted to perfection. ✨💍🎶💛</p>
        </div>
      </div>

      <div className="image-text-container">
        <img src="/images/wed2.jpg" alt="Wedding Anniversary" className="image" />
        <div className="text-content">
          <h3>Wedding Anniversary</h3>
          <p>Secure your special day with us! Book your event in advance to ensure seamless planning and availability. 🎉</p>
        </div>
      </div>

      <div className="image-text-container">
        <img src="/images/wed3.jpg" alt="Haldi Ceremony" className="image" />
        <div className="text-content">
          <h3>Haldi Ceremony</h3>
          <p>Celebrate the joy of your Haldi ceremony with us! Book your date in advance for a vibrant, hassle-free event filled with colors, laughter, and traditions. 💛🎊</p>
        </div>
      </div>



    </>
  );
};

export default Home;
