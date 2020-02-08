import React from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

function FirstPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/second">Second Page</Link>
      </header>
    </div>
  );
}

export default FirstPage;
