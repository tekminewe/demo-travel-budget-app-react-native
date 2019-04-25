import React from 'react';
import renderer from 'react-test-renderer';
import { TripListPage } from '../TripListPage';

describe('TripListPage', () => {
  let props;

  beforeEach(() => {
    props = {
      trips: [],
    };
  });

  test('should display add button if no trips', () => {
    const page = renderer.create(<TripListPage {...props} />).toJSON();
    expect(page).toMatchSnapshot();
  });

  test('should trips list if have trips', () => {
    props = {
      ...props,
      trips: [
        {
          id: 1,
          name: 'Trip 1',
        },
        {
          id: 2,
          name: 'Trip 2',
        },
      ],
    };
    const page = renderer.create(<TripListPage {...props} />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
