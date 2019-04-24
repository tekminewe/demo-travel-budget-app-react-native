// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';
import TripListPage from './src/pages/TripListPage';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TripListPage />
      </SafeAreaView>
    );
  }
}
