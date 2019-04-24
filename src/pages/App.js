// @flow
import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes/Routes';
import Store from '../store/Store';


type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}
