// @flow
import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes/Routes';
import Store from '../store/Store';

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
