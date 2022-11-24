import React from 'react';
import './global/style.css';
import Header from './components/header';
import Body from './components/body';
import Caroussel from './components/carousel';

function App() {

  return (
    <div className="App">
      <Header />
      <Caroussel />
      <Body />
    </div>
  );
}

export default App;
