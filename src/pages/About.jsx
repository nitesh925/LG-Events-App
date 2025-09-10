import React from 'react';
import '../styles/About.css'; // Ensure you have the CSS file


const Videos = () => {
  return (
    <div className="video-grid">
      <video autoPlay loop muted playsInline className="video-item">
        <source src="/videos/vid1.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted playsInline className="video-item">
        <source src="/videos/vid2.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted playsInline className="video-item">
        <source src="/videos/vid3.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted playsInline className="video-item">
        <source src="/videos/vid4.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Videos;



