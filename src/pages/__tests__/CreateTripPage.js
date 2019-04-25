import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
    const page = shallow(<CreateTripPage {...props} />);
    const textInput = page.findWhere(node => node.prop('testID') === 'tripNameTextInput');
    const addButton = page.findWhere(node => node.prop('testID') === 'addButton');

    textInput.simulate('changeText', 'yessss');
    page.update();
    addButton.simulate('press');

    expect(props.createTrip).toHaveBeenCalled();
    expect(props.navigation.pop).toHaveBeenCalled();
  });
});
