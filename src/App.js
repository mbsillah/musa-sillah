import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Welcome />
      <About />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
};

export default App;