// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { type TripType } from '../reducers/TripReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type PropsType = {
  trip: TripType,
}

const TripListItem = ({ trip }: PropsType) => (
  <View style={styles.container}>
    <Text>{`Id: ${trip.id}`}</Text>
    <Text>{`Name: ${trip.name}`}</Text>
  </View>
);

export default TripListItem;
