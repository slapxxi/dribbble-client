import React from 'react';
import glamorous from 'glamorous-native';
import { Svg } from 'expo';

type Props = {
  h: number,
  m: number,
  s: number,
  color: string,
  size: number,
};

const {
  Circle, Rect, Line, Path, G,
} = Svg;

const Base = glamorous(Circle)(({ color }) => ({
  fill: color,
  stroke: color,
}));

const Rectangle = glamorous(Rect)(({ color }) => ({
  fill: color,
  stroke: color,
}));

const InnerBase = glamorous(Circle)(({ color }) => ({
  fill: 'white',
  stroke: color,
}));

const Pointer = glamorous(Line)(({ color }) => ({
  fill: 'none',
  stroke: color,
}));

const Mark = glamorous(Line)(({ color }) => ({
  fill: 'none',
  stroke: color,
}));

const ShadowLine = glamorous(Line)(({ color }) => ({
  fill: 'none',
  stroke: color,
}));

const ShadowPath = glamorous(Path)(({ color }) => ({
  fill: 'none',
  stroke: color,
}));

const HourPointer = glamorous(Line)({
});

const MinutePointer = glamorous(Line)({
});

const ThinRect = glamorous(Rect)({
});

function Clock({
  color = 'tomato', size, h, m, s,
}: Props) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 -2 165.5 180"
    >
      <G id="buttons">
        <G id="right">
          <ThinRect
            color={color}
            x="125.76"
            y="25.48"
            width="5.84"
            height="6"
            transform="translate(27.37 -64.76) rotate(30.01)"
          />
          <Rect
            color={color}
            x="122.21"
            y="20.42"
            width="17.88"
            height="6.83"
            rx="1.39"
            ry="1.39"
            transform={[
              { translateX: 25.56, translateY: -66.57, rotate: 30.01 },
            ]}
          />
          <Pointer
            color={color}
            x1="127.22"
            y1="19.66"
            x2="133.26"
            y2="23.15"
          />
        </G>
        <G id="left">
          <ThinRect
            color={color}
            x="41.71"
            y="25.42"
            width="5.87"
            height="6"
            transform={[
              { translateX: -12, translateY: 21.94, rotate: -30.02 },
            ]}
          />
          <Rect
            color={color}
            x="33.25"
            y="20.43"
            width="17.88"
            height="6.83"
            rx="1.39"
            ry="1.39"
            transform={[
              { translateX: -10.2, translateY: 20.14, rotate: -30.02 },
            ]}
          />
          <Pointer
            color={color}
            x1="38.26"
            y1="19.67"
            x2="44.3"
            y2="16.18"
          />
        </G>
        <G id="top">
          <ThinRect
            color={color}
            x="79.14"
            y="8.61"
            width="7.22"
            height="8"
          />
          <Rect
            color={color}
            x="71.67"
            y="0.5"
            width="22.17"
            height="9.65"
            rx="1.39"
            ry="1.39"
          />
          <Pointer
            color={color}
            x1="82.75"
            y1="3.33"
            x2="91.69"
            y2="3.33"
          />
          <Pointer
            color={color}
            x1="82.75"
            y1="7.33"
            x2="91.69"
            y2="7.33"
          />
        </G>
      </G>
      <G id="base">
        <Base color={color} cx="82.75" cy="96.65" r="80" />
        <InnerBase color={color} cx="82.75" cy="96.65" r="70.88" />
        <ShadowPath
          color={color}
          d="M146.89,93.83A60.68,60.68,0,0,1,27.13,113.08"
          transform="translate(-3.93 -4.17)"
        />
        <ShadowPath
          color={color}
          d="M147.17,73A66.57,66.57,0,0,1,42,150.17"
          transform="translate(-3.93 -4.17)"
        />
      </G>
      <G id="shadow">
        <ShadowLine
          color={color}
          x1="82.45"
          y1="124.9"
          x2="109.78"
          y2="124.9"
        />
        <ShadowLine
          color={color}
          x1="114.28"
          y1="119.9"
          x2="80.02"
          y2="119.9"
        />
        <ShadowLine
          color={color}
          x1="94.03"
          y1="104.9"
          x2="123.19"
          y2="104.9"
        />
        <ShadowLine
          color={color}
          x1="124.69"
          y1="99.9"
          x2="96.96"
          y2="99.9"
        />
        <ShadowLine
          color={color}
          x1="120.96"
          y1="109.9"
          x2="87.28"
          y2="109.9"
        />
        <ShadowLine
          color={color}
          x1="82.28"
          y1="114.9"
          x2="118.01"
          y2="114.9"
        />
        <ShadowLine
          color={color}
          x1="84.38"
          y1="129.9"
          x2="103.45"
          y2="129.9"
        />
        <ShadowLine
          color={color}
          x1="87.33"
          y1="139.9"
          x2="90.89"
          y2="139.9"
        />
        <ShadowLine
          color={color}
          x1="95.22"
          y1="134.9"
          x2="85.69"
          y2="134.9"
        />
        <ShadowLine
          color={color}
          x1="125.62"
          y1="94.9"
          x2="100.78"
          y2="94.9"
        />
        <ShadowLine
          color={color}
          x1="108.54"
          y1="79.9"
          x2="126.13"
          y2="79.9"
        />
        <ShadowLine
          color={color}
          x1="125.49"
          y1="74.9"
          x2="111.88"
          y2="74.9"
        />
        <ShadowLine
          color={color}
          x1="125.38"
          y1="69.9"
          x2="114.52"
          y2="69.9"
        />
        <ShadowLine
          color={color}
          x1="122.74"
          y1="64.9"
          x2="118.66"
          y2="64.9"
        />
        <ShadowPath
          color={color}
          d="M109.81,85.58"
          transform="translate(-3.93 -4.17)"
        />
        <ShadowLine
          color={color}
          x1="105.18"
          y1="84.9"
          x2="126.35"
          y2="84.9"
        />
        <ShadowLine
          color={color}
          x1="104.05"
          y1="89.9"
          x2="126.17"
          y2="89.9"
        />
      </G>
      <G id="marks">
        <Mark
          color={color}
          x1="139.19"
          y1="96.63"
          x2="149.31"
          y2="96.63"
        />
        <Mark
          color={color}
          x1="131.51"
          y1="124.81"
          x2="140.25"
          y2="129.92"
        />
        <Mark
          color={color}
          x1="110.64"
          y1="144.98"
          x2="115.76"
          y2="153.72"
        />
        <Mark
          color={color}
          x1="82.74"
          y1="152.65"
          x2="82.76"
          y2="162.78"
        />
        <Mark
          color={color}
          x1="54.84"
          y1="144.98"
          x2="49.74"
          y2="153.72"
        />
        <Mark
          color={color}
          x1="34.42"
          y1="124.5"
          x2="25.69"
          y2="129.64"
        />
        <Mark color={color} x1="26.75" y1="96.64" x2="16.62" y2="96.64" />
        <Mark color={color} x1="34.43" y1="68.75" x2="25.68" y2="63.66" />
        <Mark color={color} x1="54.61" y1="47.88" x2="49.46" y2="39.16" />
        <Mark
          color={color}
          x1="110.86"
          y1="47.88"
          x2="116.01"
          y2="39.16"
        />
        <Mark
          color={color}
          x1="131.68"
          y1="68.45"
          x2="140.43"
          y2="63.36"
        />
        <Mark color={color} x1="82.77" y1="40.22" x2="82.73" y2="30.09" />
      </G>
      <G id="pointers">
        <Pointer
          color={color}
          id="second"
          x1="82.75"
          y1="34.81"
          x2="82.75"
          y2="106.96"
          transform={`rotate(${s * 6} 82.75 96.65)`}
        />
        <HourPointer
          color={color}
          id="hour"
          x1="82.75"
          y1="55"
          x2="82.75"
          y2="106.96"
          transform={`rotate(${(h * 30) + (m * 0.5)} 82.75 96.65)`}
        />
        <MinutePointer
          color={color}
          id="minute"
          x1="82.75"
          y1="45"
          x2="82.75"
          y2="106.96"
          transform={[
            { rotate: (m * 6) + (s * 0.1) },
          ]}
        />
        <Base color={color} cx="82.75" cy="96.65" r="3.99" />
      </G>
    </Svg>
  );
}

export default Clock;
