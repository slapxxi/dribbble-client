import { selectPopularShots } from './selectors';

const mockState = {
  all: [{ id: 0 }, { id: 1 }],
  popularShots: [0, 1],
};

const mockEmptyState = {
  all: [],
  popularShots: [0, 1],
};

it('selects popular shots', () => {
  const result = selectPopularShots(mockState);
  expect(result).toEqual([{ id: 0 }, { id: 1 }]);
});

it('returns empty array if there is nothing to select from', () => {
  const result = selectPopularShots(mockEmptyState);
  expect(result).toEqual([]);
});
