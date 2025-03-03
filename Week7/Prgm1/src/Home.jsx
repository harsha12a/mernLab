import React from 'react';
import image from './images/image.png'

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '36px', color: '#4F46E5' }}>Welcome to Zenith Institute</h1>
      <p style={{ color: '#555' }}>Shaping Futures with Excellence in Education!</p>
      <img src={image} alt="Zenith Institute" style={{ width: '75%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
    </div>
  );
};

export default Home;
