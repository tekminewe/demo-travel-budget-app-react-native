// @flow
import React from 'react';
import { connect } from 'react-redux';
import EmptyTrip from '../components/EmptyTrip';
import { type TripStateType } from '../reducers/TripReducer';
import TripList from '../components/TripList';

type PropsType = {
  navigation: any,
  trips: $PropertyType<TripStateType, 'trips'>,
}

export const TripListPage = ({ navigation, trips }: PropsType) => {
  if (!trips.length) {
    return (
      <EmptyTrip onAdd={() => navigation.push('CreateTrip')} />
    );
  }

  return (<TripList trips={trips} />);
};

TripListPage.navigationOptions = {
  title: 'Trips',
};

const mapStateToProps = state => ({
  trips: state.trip.trips,
});

export default connect(mapStateToProps, null)(TripListPage);
