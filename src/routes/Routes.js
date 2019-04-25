// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ConnectedTripListPage from '../pages/TripListPage';
import ConnectedCreateTripPage from '../pages/CreateTripPage';

const AppNavigator = createStackNavigator(
  {
    TripList: ConnectedTripListPage,
    CreateTrip: ConnectedCreateTripPage,
  },
);

export default createAppContainer(AppNavigator);
