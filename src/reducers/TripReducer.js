// @flow
import { type TripActionType } from '../actions/TripAction';

export type TripType = {
  id: number,
  name: string,
}

export type TripStateType = {
  trips: TripType[],
}

const initialState: TripStateType = {
  trips: [],
};

export default (state: TripStateType = initialState, action: TripActionType) => {
  switch (action.type) {
    case 'CREATE_TRIP':
      return {
        trips: [
          ...state.trips,
          {
            id: state.trips.length + 1,
            name: action.name,
          },
        ],
      };
    default:
      return state;
  }
};
