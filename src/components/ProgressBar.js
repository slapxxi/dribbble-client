import React from 'react';
import glamorous from 'glamorous-native';
import calculatePercentage from '../lib/calculatePercentage';

type Props = { loaded: number, total: number, color: string };

function ProgressBar({ loaded, total, color }: Props) {
  return (
    <Indicator
      progress={calculatePercentage(loaded, total)}
      color={color}
    />
  );
}

const Indicator = glamorous.view(({ progress, color }) => ({
  width: `${progress}%`,
  height: 3,
  backgroundColor: color,
}));

export default ProgressBar;
