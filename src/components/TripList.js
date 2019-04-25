// @flow
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { type TripStateType } from '../reducers/TripReducer';
import TripListItem from './TripListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type PropsType = {
  trips: $PropertyType<TripStateType, 'trips'>,
}

const TripList = ({ trips }: PropsType) => (
  <View style={styles.container}>
    <FlatList
      data={trips}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => (<TripListItem trip={item} />)}
    />
  </View>
);

export default TripList;
