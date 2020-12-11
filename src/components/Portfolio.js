import React from 'react';
import Skills from './Skills';

const Portfolio = ({ portfolioRef }) => {
  return (
    <div ref={portfolioRef} id="portfolio">
      <div className="portfolioContainer">
        <Skills />
        {/* <h3>Portfolio</h3>
        <div className="projects grid">
          <div>Zombie Manager</div>
          <div>Coming Soon</div>
          <div>Project 3</div>
          <div>Project 4</div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
