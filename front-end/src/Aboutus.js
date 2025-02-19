import React, { useEffect, useState } from 'react';
import './AboutUs.css';  

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error("Error fetching About Us data:", error));
  }, []);  

  if (!aboutData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <h2>{aboutData.name}</h2>
      <p>{aboutData.description}</p>
      <img src={aboutData.imageUrl} alt="About Us" className="about-us-image" />
    </div>
  );
};

export default AboutUs;
