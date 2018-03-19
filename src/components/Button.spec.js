import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders a button', () => {
  const component = shallow(<Button>Button</Button>);
  expect(component.contains(<Text>Button</Text>)).toBeTruthy();
});
