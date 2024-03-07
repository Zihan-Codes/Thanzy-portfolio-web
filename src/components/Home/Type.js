import React, { useState, useEffect } from 'react';

function Type() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const strings = [
    "Clinical Psycologist",
    "Psycological Lecturere",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 3000); // Change the string every 3000ms (3 seconds)

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {strings.map((str, index) => (
        <div
          key={index}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s',
            height: index === currentIndex ? 'auto' : 0,
            overflow: 'hidden',
            // fontSize: '54px',
          }}
          className='JobNames'
        >
          {str}
        </div>
      ))}
    </div>
  );
}

export default Type;

