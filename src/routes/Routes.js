// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ConnectedTripListPage from '../pages/TripListPage';
import ConnectedCreateTripPage from '../pages/CreateTripPage';

const AppNavigator = createStackNavigator(
  {
    TripList: ConnectedTripListPage,
    CreateTrip: ConnectedCreateTripPage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#9c27b0',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
