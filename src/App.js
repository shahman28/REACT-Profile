import React from 'react';
import './App.css';
//import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
//import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
//import huffman from './components/huffman'



function App() {

  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );

}

function toLinkedin() {
  window.location.href = 'https://www.linkedin.com/in/manav-shah28/';
  return null;
}

export default App;
