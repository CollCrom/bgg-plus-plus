import React from 'react';
import { Provider } from 'react-redux'
import './global.css';
import store from './store';
import PersistentDrawerLeft from "./drawerLeft/DrawerLeft";
import InfoCardContainer from './infoCard/infoCardContainer'

const App = (tabs) => {
  return (
    <Provider store={store}>
      <div className="App">
        <PersistentDrawerLeft/>
        <InfoCardContainer/>
      </div>
    </Provider>
  );
}
export default App;
