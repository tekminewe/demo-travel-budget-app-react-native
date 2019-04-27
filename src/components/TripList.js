// @flow
import React from 'react';
import { FlatList } from 'react-native';
import { type TripStateType } from '../reducers/TripReducer';
import TripListItem from './TripListItem';

type PropsType = {
  trips: $PropertyType<TripStateType, 'trips'>,
}

const TripList = ({ trips }: PropsType) => (
  <FlatList
    data={trips}
    keyExtractor={item => `${item.id}`}
    renderItem={({ item }) => (<TripListItem trip={item} />)}
  />
);

export default TripList;
