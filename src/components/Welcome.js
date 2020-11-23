import React from 'react';

const Welcome = ({ scrollTo, aboutRef }) => {
  return (
    <section id="welcome">
      <div className="welcome__text">
        <h1 className="welcome__container">
          <span className="welcome__text--primary">musa sillah</span>
          <span className="welcome__text--sub">web developer</span>
        </h1>

        <a
          className="btn btn--white btn--animated"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(aboutRef);
          }}
        >
          learn more
        </a>
      </div>
    </section>
  );
};

export default Welcome;
