import React from 'react';
import renderer from 'react-test-renderer';
import CreateTripPage from '../CreateTripPage';

describe('CreateTripPage', () => {
  test('should render form', () => {
    const page = renderer.create(<CreateTripPage />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
