import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact>
          <FirstPage />
        </Route>

          <Route path="/second" exact>
            <SecondPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
