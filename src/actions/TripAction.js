// @flow

export type TripActionType =
 | { type: 'CREATE_TRIP', name: string };

export const createTrip = (name: string): TripActionType => ({
  type: 'CREATE_TRIP',
  name,
});

export default {};
