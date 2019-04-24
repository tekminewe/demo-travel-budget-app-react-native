// @flow

export type TripActionType =
 | { type: 'CREATE_TRIP', name: string };

export const createTrip = (name: string): TripActionType => {
  return {
    type: 'CREATE_TRIP',
    name,
  }
};
