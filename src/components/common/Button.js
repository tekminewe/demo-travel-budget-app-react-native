// @flow
import React from 'react';
import { Button as NBButton, Text } from 'native-base';

type PropsType = {
  title: any,
  onPress?: () => void,
};

const Button = ({ title, onPress }: PropsType) => (
  <NBButton
    rounded
    block
    onPress={onPress}
  >
    <Text>
      {title}
    </Text>
  </NBButton>
);

Button.defaultProps = {
  onPress: () => {},
};

export default Button;
