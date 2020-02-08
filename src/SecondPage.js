import React from 'react';
import logo from './logo.svg';
import './App.css';

function SecondPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/ryofxbuilder/todo-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );

}

export default SecondPage;
