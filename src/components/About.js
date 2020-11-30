import React from 'react';

const About = ({ aboutRef, portfolioRef, scrollTo }) => {
  return (
    <div ref={aboutRef} id="about">
      <div className="about__container">
        {/* <h3>About Me</h3> */}
        <img
          src={
            'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121232794-stock-illustration-male-default-placeholder-avatar-profile.jpg'
          }
          alt="myPhoto"
          className="profile-img"
        />
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
          className="btn btn--white"
          href="#"
        >
          see my work
        </a>
      </div>
    </div>
  );
};

export default About;
