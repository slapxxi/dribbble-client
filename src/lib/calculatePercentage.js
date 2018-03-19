// @flow
type CurrentValue = number;
type TotalValue = number;

function calculatePercentage(
  current?: CurrentValue = 0,
  total?: TotalValue = 0,
) {
  const percentage = Math.round(current / total * 100);
  if (current <= 0) {
    return 0;
  }
  if (percentage > 100) {
    return 100;
  }
  return percentage;
}

export default calculatePercentage;
