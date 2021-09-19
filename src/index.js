import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs/AboutUs';
import NavBar from './NavBar/NavBar';



ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
    <AboutUs />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);