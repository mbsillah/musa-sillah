import React from "react";
import Skills from "./Skills";

const Portfolio = ({ portfolioRef }) => {
  return (
    <div ref={portfolioRef} id="portfolio">
      <Skills />
      <h3>Portfolio</h3>
      <div className="projects grid">
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
        <div>Project 4</div>
      </div>
    </div>
  );
};

export default Portfolio;
