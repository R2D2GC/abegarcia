import './App.css';
import React from 'react';
import { Navbar } from './components/muiNavbar';
import Carousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;
