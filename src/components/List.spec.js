// @flow
import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import List from './List';

const shots = [{ title: 'First' }];

it('renders a list of shots', () => {
  const component = shallow(<List shots={shots} />);
  expect(component.find(View).length).toEqual(shots.length);
});
