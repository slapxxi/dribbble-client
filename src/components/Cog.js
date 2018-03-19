import React from 'react';
import { Animated } from 'react-native';
import { Svg } from 'expo';

type Props = { size: number, color: string, rotate: number };

const { G, Path, Circle } = Svg;

const AnimatedGroup = Animated.createAnimatedComponent(G);

class Cog extends React.Component<Props> {
  render() {
    const { size, color, rotate } = this.props;
    return (
      <Svg
        width={size}
        height={size}
        viewBox="-2 -2 102 102"
        fill={color}
        stroke={color}
        strokeWidth={8}
      >
        <AnimatedGroup fill="none" transform={{ rotate }}>
          <Path
            d="M93.86,32.15,87.39,20.94a4.74,4.74,0,0,0-5.6-2.13L71.13,22.33a6,6,0,0,1-7.74-4.47l-2.28-11a4.74,4.74,0,0,0-4.65-3.78H43.53a4.74,4.74,0,0,0-4.65,3.78l-2.28,11a6,6,0,0,1-7.74,4.47L18.2,18.81a4.74,4.74,0,0,0-5.6,2.13L6.14,32.15a4.74,4.74,0,0,0,1,5.91l8.38,7.47a6,6,0,0,1,0,8.93L7.09,61.94a4.74,4.74,0,0,0-1,5.91l6.47,11.21a4.74,4.74,0,0,0,5.6,2.13l10.66-3.52a6,6,0,0,1,7.74,4.47l2.28,11a4.74,4.74,0,0,0,4.65,3.78H56.47a4.74,4.74,0,0,0,4.65-3.78l2.28-11a6,6,0,0,1,7.74-4.47L81.8,81.19a4.74,4.74,0,0,0,5.6-2.13l6.47-11.21a4.74,4.74,0,0,0-1-5.91l-8.38-7.47a6,6,0,0,1,0-8.93l8.38-7.47A4.74,4.74,0,0,0,93.86,32.15Z"
            stroke={color}
            strokeWidth={6}
            transform={{
                origin: 50,
                translateX: -3.5,
                translateY: -1.09,
              }}
          />
          <Circle
            stroke={color}
            strokeWidth={6}
            cx="46.5"
            cy="48.91"
            r="10.63"
          />
        </AnimatedGroup>
      </Svg>
    );
  }
}

export default Cog;
