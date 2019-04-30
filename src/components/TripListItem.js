// @flow
import React, { memo } from 'react';
import { Card, CardItem, Text } from 'native-base';
import { type TripType } from '../reducers/TripReducer';

type PropsType = {
  trip: TripType,
}

const TripListItem = ({ trip }: PropsType) => (
  <Card>
    <CardItem header>
      <Text>{`Trip: ${trip.name}`}</Text>
    </CardItem>
  </Card>
);

export default memo<PropsType>(TripListItem);
