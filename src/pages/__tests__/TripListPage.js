import React from 'react';
import renderer from 'react-test-renderer';
import TripListPage from '../TripListPage';

describe('TripListPage', () => {
  test('should display add button if no trips', () => {
    const page = renderer.create(<TripListPage />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
