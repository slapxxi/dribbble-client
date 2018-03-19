// @flow
import React from 'react';
import { View } from 'react-native';
import type { Shots } from '../store/shots/types';

type Props = { shots: Shots };

function List({ shots }: Props) {
  return <View>{shots.map((shot) => shot.title)}</View>;
}

export default List;
