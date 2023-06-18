import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/sass/index.scss';
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';

function App() {
  return (
    <>
      <Navbar/>
      <NavbarBottom/>
    </>
  );
}

export default App;
