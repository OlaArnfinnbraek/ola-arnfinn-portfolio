import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import { NavigationLinks } from './Components/NavigationLinks';
import  ParticleAnimation  from 'react-particle-animation';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ParticleAnimation 
      background={{ r: 21, g: 22, b: 23, a: 1 }}
      particleRadius={3}
      color={{r: 158, g: 117, b: 249, a: 255}}
      />
    </div>
  );
}

export default App;
