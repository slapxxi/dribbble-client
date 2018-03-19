// @flow
type Proximity = number;
type Offset = { x: number, y: number };
type NativeEvent = { contentOffset: Offset };
type Direction = 'up' | 'down' | 'none';

function watchScrollDirection(proximity: Proximity = 50): Function {
  let memoizedOffset = 0;
  return ({ contentOffset }: NativeEvent): Direction => {
    const currentVerticalOffset = Math.max(contentOffset.y, 0);
    if (isTooClose(currentVerticalOffset, memoizedOffset, proximity)) {
      return 'none';
    }
    const direction =
      currentVerticalOffset > memoizedOffset ? 'down' : 'up';
    memoizedOffset = currentVerticalOffset;
    return direction;
  };
}

function isTooClose(first, second, proximity) {
  return Math.abs(first - second) <= proximity;
}

export default watchScrollDirection;
