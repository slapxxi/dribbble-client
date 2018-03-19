import React from 'react';
import { Svg } from 'expo';

const { Rect } = Svg;

function Icon() {
  return (
    <Svg
      width={200}
      height={200}
      viewBox="0 0 150 150"
    >
      <Rect
        x={50}
        y={50}
        width={30}
        height={30}
        rotate={30}
        fill="tomato"
      />
    </Svg>
  );
}

export default Icon;
