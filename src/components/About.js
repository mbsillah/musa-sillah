import React from 'react';
import pic from '../assets/profile.jpg';

const About = ({ aboutRef, portfolioRef, scrollTo }) => {
  return (
    <div ref={aboutRef} id="about">
      <div className="about__container">
        {/* <h3>About Me</h3> */}
        <img src={pic} alt="myPhoto" className="profile-img" />
        <div className="about__text">
          Lorem Khaled Ipsum is a major key to success. A major key, never
          panic. Don’t panic, when it gets crazy and rough, don’t panic, stay
          calm.
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollTo(portfolioRef);
          }}
          className="btn btn--white btn--animated"
          href="#"
        >
          my skills
        </a>
      </div>
    </div>
  );
};

export default About;
