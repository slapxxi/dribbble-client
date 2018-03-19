import doesRequireFetching from './doesRequireFetching';
import { fetchShots } from '../store/shots/actions';

it('returns true if first request', () => {
  const action = fetchShots('popular', 1);
  const mockedStore = createMockStore(0, []);
  const result = doesRequireFetching(action, mockedStore);
  expect(result).toBeTruthy();
});

it('returns true if relevant category not requested before', () => {
  const action = fetchShots('popular', 1);
  const mockedStore = createMockStore(190283, []);
  const result = doesRequireFetching(action, mockedStore);
  expect(result).toBeTruthy();
});

it('returns true if requesting next page', () => {
  const action = fetchShots('popular', 2);
  const mockedStore = createMockStore(123456, [123]);
  const result = doesRequireFetching(action, mockedStore);
  expect(result).toBeTruthy();
});

it('returns false if subsequent request', () => {
  const action = fetchShots('popular', 1);
  const mockedStore = createMockStore(123456, [123]);
  const result = doesRequireFetching(action, mockedStore);
  expect(result).toBeFalsy();
});

function createMockStore(lastUpdated, popShots) {
  return {
    getState() {
      return {
        shots: { lastUpdated, popularShots: popShots },
      };
    },
  };
}
