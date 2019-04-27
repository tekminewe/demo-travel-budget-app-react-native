// @flow
import React from 'react';
import { Button } from 'react-native';

type PropsType = {
  title: string,
  onPress?: () => void,
}

const HeaderButton = (props: PropsType) => (
  <Button {...props} color="white" />
);

HeaderButton.defaultProps = {
  onPress: () => {},
};

export default HeaderButton;
