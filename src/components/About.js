// About.js

import React from 'react';

const About = ({ imageSrc = "https://via.placeholder.com/215", aboutText }) => {
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
