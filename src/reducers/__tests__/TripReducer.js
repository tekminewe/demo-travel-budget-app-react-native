import TripReducer from '../TripReducer';

describe('TripReducer', () => {
  test('should return previous state for unknown action', () => {
    const state = { trips: [] };
    const action = { type: 'RANDOM' };
    expect(TripReducer(state, action)).toBe(state);
  });

  describe('CREATE_TRIP', () => {
    test('should append new trip', () => {
      const state = {
        trips: [
          {
            id: 1,
            name: 'Trip 1',
          }
        ],
      };
      const action = {
        type: 'CREATE_TRIP',
        name: 'Trip 2',
      };
      expect(TripReducer(state, action)).toEqual({
        trips: [
          {
            id: 1,
            name: 'Trip 1',
          },
          {
            id: 2,
            name: 'Trip 2',
          }
        ]
      });
    });
  });
});
