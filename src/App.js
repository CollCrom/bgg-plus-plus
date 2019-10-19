import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import PersistentDrawerLeft from "./DrawerLeft";

const handleTabClick = (tab) => () => {

}; 

const App = (tabs) => {
  return (
    <Provider store={store}>
      <div className="App">
        <PersistentDrawerLeft/>
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
    </Provider>
  );
}

export default App;
