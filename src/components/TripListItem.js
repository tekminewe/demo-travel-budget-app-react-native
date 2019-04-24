// @flow
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
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

export const TripListItem = ({ trip }: PropsType) => {
  return (
    <View style={styles.container}>
      <Text>{`Id: ${trip.id}`}</Text>
      <Text>{`Name: ${trip.name}`}</Text>
    </View>
  )
};


export default TripListItem;
