import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import huffman from './components/huffman'



function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="https://www.linkedin.com/in/manav-shah28/" >
          <Route exact path="/huffman" component={huffman} />

        </Route>
      </Switch>
    </Router>

  );

}

function toLinkedin() {
  window.location.href = 'https://www.linkedin.com/in/manav-shah28/';
  return null;
}

export default App;
