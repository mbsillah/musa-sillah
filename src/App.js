import React, { useRef } from 'react';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  let aboutRef = useRef();
  let portfolioRef = useRef();

  function scrollTo(ref) {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
  }

  return (
    <React.Fragment>
      <h1>Test commit!!!!</h1>
      <Welcome aboutRef={aboutRef} scrollTo={scrollTo} />
      <About
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        scrollTo={scrollTo}
      />
      <Portfolio portfolioRef={portfolioRef} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
