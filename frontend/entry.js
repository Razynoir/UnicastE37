import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppContainer from './components/app_container';
import {Add_ITEM} from './actions';

// put store and actions on the window
window.store = store;

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  )
})
