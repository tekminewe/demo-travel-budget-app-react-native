import { createTrip } from '../TripAction';

describe('TripAction', () => {
  describe('createTrip', () => {
    test('should create CREATE_TRIP action', () => {
      expect(createTrip('New Trip')).toEqual({
        type: 'CREATE_TRIP',
        name: 'New Trip',
      });
    });
  });
});
