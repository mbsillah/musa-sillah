import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Welcome />
      <Skills />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
};

export default App;