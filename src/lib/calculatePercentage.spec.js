// @flow
import calculatePercentage from './calculatePercentage';

it('returns current value of total in percentages', () => {
  const result = calculatePercentage(1, 10);
  expect(result).toEqual(10);
});

it('returns zero if no parameters provided', () => {
  const result = calculatePercentage();
  expect(result).toEqual(0);
});

it('does not go beyond limit', () => {
  const result = calculatePercentage(24, 23);
  expect(result).toEqual(100);
});

it('rounds a resulting percentage', () => {
  const result = calculatePercentage(266, 1024);
  expect(result).toEqual(26);
});

it('returns zero when current is zero', () => {
  const result = calculatePercentage(0, 10);
  expect(result).toEqual(0);
});
