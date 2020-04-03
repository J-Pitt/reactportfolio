import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
