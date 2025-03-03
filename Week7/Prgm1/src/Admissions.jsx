import React from 'react';

const Admissions = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '30px', color: '#4F46E5' }}>Admissions</h2>
      <p style={{ color: '#555', maxWidth: '800px', margin: '20px auto' }}>
        Join Zenith Institute to unlock your potential! Our admissions process is simple and transparent.
      </p>
      <ul style={{ color: '#555', maxWidth: '600px', margin: '20px auto', textAlign: 'left' }}>
        <li>Submit your application online through our portal.</li>
        <li>Appear for an entrance test if required.</li>
        <li>Attend the counseling session for guidance.</li>
        <li>Confirm your seat by submitting required documents and fees.</li>
      </ul>
      <button style={{ backgroundColor: '#4F46E5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
        Apply Now
      </button>
    </div>
  );
};

export default Admissions;
