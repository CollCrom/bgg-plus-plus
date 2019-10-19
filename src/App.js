import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const App = () => {
  return (
    <div className="App">
      <Drawer open="true" variant="persistent">
      <Button>Playing Time</Button>
      </Drawer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
