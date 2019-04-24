// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TripListPage from '../pages/TripListPage';
import CreateTripPage from '../pages/CreateTripPage';

const AppNavigator = createStackNavigator(
  {
    TripList: TripListPage,
    CreateTrip: CreateTripPage,
  },
);

export default createAppContainer(AppNavigator);
