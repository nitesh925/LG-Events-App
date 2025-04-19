import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Service.css';  // Import the CSS file

const services = {
  engagement: {
    name: 'Engagement',
    description: 'Celebrate the start of forever with our elegant engagement services.',
    images: [
      '/requiredImages/engagement-imgs/engagement3.jpg',
      '/requiredImages/engagement-imgs/engagement2.jpg',
      '/requiredImages/engagement-imgs/engagement1.jpg',
      '/requiredImages/engagement-imgs/engagement4.jpg',
      '/requiredImages/engagement-imgs/engagement5.jpg',
      '/requiredImages/engagement-imgs/engagement3.jpg',
      '/requiredImages/engagement-imgs/engagement6.jpg',
      '/requiredImages/engagement-imgs/engagement7.jpg',
      '/requiredImages/engagement-imgs/engagement8.jpg'
      
    ]
  },
  marriage: {
    name: 'Wedding',
    description: 'Plan your dream wedding with full-service event management.',
    images: [
      '/images/marriage1.jpg',
      '/images/marriage2.jpg',
      '/images/marriage3.jpg',
      '/images/marriage4.jpg',
      '/images/marriage5.jpg',
      '/images/marriage6.jpg',
      '/images/marriage7.jpg',
      '/images/marriage8.jpg',
      '/images/marriage9.jpg',
      '/images/marriage10.jpg'
    ]
  },
  birthday: {
    name: 'Birthday',
    description: 'Make birthdays extra special with fun themes and surprises.',
    images: [
      '/images/birthday1.jpg',
      '/images/birthday2.jpg',
      '/images/birthday3.jpg',
      '/images/birthday4.jpg',
      '/images/birthday5.jpg',
      '/images/birthday6.jpg',
      '/images/birthday7.jpg',
      '/images/birthday8.jpg',
      '/images/birthday9.jpg',
      '/images/birthday10.jpg'
    ]
  },
  photography: {
    name: 'Photography',
    description: 'Capture every precious moment with our professional photographers.',
    images: [
      '/images/photography1.jpg',
      '/images/photography2.jpg',
      '/images/photography3.jpg',
      '/images/photography4.jpg',
      '/images/photography5.jpg',
      '/images/photography6.jpg',
      '/images/photography7.jpg',
      '/images/photography8.jpg',
      '/images/photography9.jpg',
      '/images/photography10.jpg'
    ]
  },
  catering: {
    name: 'Catering',
    description: 'Delight your guests with exquisite food and beverage services.',
    images: [
      '/images/catering1.jpg',
      '/images/catering2.jpg',
      '/images/catering3.jpg',
      '/images/catering4.jpg',
      '/images/catering5.jpg',
      '/images/catering6.jpg',
      '/images/catering7.jpg',
      '/images/catering8.jpg',
      '/images/catering9.jpg',
      '/images/catering10.jpg'
    ]
  },
  events: {
    name: 'Corporate',
    description: 'Manage your corporate events with seamless planning and execution.',
    images: [
      '/images/corporate1.jpg',
      '/images/corporate2.jpg',
      '/images/corporate3.jpg',
      '/images/corporate4.jpg',
      '/images/corporate5.jpg',
      '/images/corporate6.jpg',
      '/images/corporate7.jpg',
      '/images/corporate8.jpg',
      '/images/corporate9.jpg',
      '/images/corporate10.jpg'
    ]
  },
  lights: {
    name: 'Lighting',
    description: 'Illuminate your event with stunning lighting effects and designs.',
    images: [
      '/images/lights1.jpg',
      '/images/lights2.jpg',
      '/images/lights3.jpg',
      '/images/lights4.jpg',
      '/images/lights5.jpg',
      '/images/lights6.jpg',
      '/images/lights7.jpg',
      '/images/lights8.jpg',
      '/images/lights9.jpg',
      '/images/lights10.jpg'
    ]
  },
  branding: {
    name: 'Branding',
    description: 'Create memorable branding experiences for your event.',
    images: [
      '/images/branding1.jpg',
      '/images/branding2.jpg',
      '/images/branding3.jpg',
      '/images/branding4.jpg',
      '/images/branding5.jpg',
      '/images/branding6.jpg',
      '/images/branding7.jpg',
      '/images/branding8.jpg',
      '/images/branding9.jpg',
      '/images/branding10.jpg'
    ]
  },
  stage: {
    name: 'Decoration',
    description: 'Design and decorate your event with creativity and style.',
    images: [
      '/images/stage1.jpg',
      '/images/stage2.jpg',
      '/images/stage3.jpg',
      '/images/stage4.jpg',
      '/images/stage5.jpg',
      '/images/stage6.jpg',
      '/images/stage7.jpg',
      '/images/stage8.jpg',
      '/images/stage9.jpg',
      '/images/stage10.jpg'
    ]
  },
  house: {
    name: 'Inauguration',
    description: 'Celebrate the opening of your new space with a memorable inauguration.',
    images: [
      '/images/house1.jpg',
      '/images/house2.jpg',
      '/images/house3.jpg',
      '/images/house4.jpg',
      '/images/house5.jpg',
      '/images/house6.jpg',
      '/images/house7.jpg',
      '/images/house8.jpg',
      '/images/house9.jpg',
      '/images/house10.jpg'
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return <h2>404 - Service Not Found</h2>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{service.name}</h1>
      <p style={{ fontSize: '18px' }}>{service.description}</p>
      
      <div className="images-gallery">
        {service.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${service.name} image ${index + 1}`}
            className="gallery-image"  // Applying the CSS class
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
