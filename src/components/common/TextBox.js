// @flow
import React from 'react';
import { Item, Input } from 'native-base';

type PropsType = {
  placeholder: string,
  style: any,
}

const TextBox = ({ style, ...otherProps }: PropsType) => (
  <Item rounded style={style}>
    <Input {...otherProps} />
  </Item>
);

export default TextBox;
