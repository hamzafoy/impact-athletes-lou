import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs/AboutUs'



ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
    <AboutUs />
  </React.StrictMode>,
  document.getElementById('root')
);