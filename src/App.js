import React from 'react';
import './global/style.css';
import Header from './components/header';
import Body from './components/body';
import Caroussel from './components/carousel';
import Vehicle from './components/vehicle';

function App() {

  return (
    <div className="App">
      <Header />
      <Caroussel />
      <Vehicle />
      <Body />
    </div>
  );
}

export default App;
