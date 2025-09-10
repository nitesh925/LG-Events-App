import React from 'react';

const weddingStages = [
  {
    id: 'stage1',
    name: 'Traditional Floral Stage',
    image: 'https://images.pexels.com/photos/1543982/pexels-photo-1543982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2160'
  },
  {
    id: 'stage2',
    name: 'Royal Golden Mandap',
    image: 'https://images.pexels.com/photos/10793390/pexels-photo-10793390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2160'
  },
  {
    id: 'stage3',
    name: 'Rustic Outdoor Stage',
    image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2160'
  },
  {
    id: 'stage4',
    name: 'Elegant White Theme',
    image: 'https://images.pexels.com/photos/1250595/pexels-photo-1250595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2160'
  },
  {
    id: 'stage5',
    name: 'Garden-Inspired Stage',
    image: 'https://images.pexels.com/photos/4503753/pexels-photo-4503753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2160'
  },
  {
    id: 'stage6',
    name: 'Modern LED Backdrop',
    image: 'https://images.pexels.com/photos/3593893/pexels-photo-3593893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2160'
  }
];

const WeddingStages = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Wedding Stage Designs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {weddingStages.map((stage) => (
          <div
            key={stage.id}
            style={{
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={stage.image}
              alt={stage.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3 style={{ padding: '10px' }}>{stage.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingStages;
