import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { CreateTripPage } from '../CreateTripPage';

describe('CreateTripPage', () => {
  const props = {
    createTrip: jest.fn(),
    navigation: {
      pop: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render form', () => {
    const page = renderer.create(<CreateTripPage {...props} />).toJSON();
    expect(page).toMatchSnapshot();
  });

  test('should create trip and return to previous page', () => {
    const page = renderer.create(<CreateTripPage {...props} />);
    const textInput = page.root.findByProps({ testID: 'tripNameTextInput' });
    const addButton = page.root.findByProps({ testID: 'addButton' });

    act(() => {
      textInput.props.onChangeText('yessss');
    });

    addButton.props.onPress();

    expect(props.createTrip).toHaveBeenCalledWith('yessss');
    expect(props.navigation.pop).toHaveBeenCalled();
  });
});
