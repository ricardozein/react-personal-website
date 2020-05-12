import React from 'react';
import './assets/css/Website.scss';
import Header from  './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';

function Website() {
  return (
    <div className="Website">
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default Website;
