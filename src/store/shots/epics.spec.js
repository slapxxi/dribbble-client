import { Observable } from 'rxjs/Observable';
import { shotsEpic } from './epics';
import { fetchShots, requestShots, receiveShots } from './actions';

jest.mock('../../lib/fetchShots');

it('initiates request when fetch is fired', async () => {
  expect.assertions(1);
  const actions = Observable.from([fetchShots()]);
  const source = await shotsEpic(actions, mockStore())
    .toArray()
    .toPromise();
  expect(source).toContainEqual(requestShots());
});

it('returns "RECEIVE_SHOTS" actions with the response', async () => {
  expect.assertions(1);
  const actions = Observable.from([fetchShots(), fetchShots()]);
  const source = await shotsEpic(actions, mockStore())
    .toArray()
    .toPromise();
  expect(source).toContainEqual(
    receiveShots({
      type: 'popular',
      shots: [],
      users: [],
    }),
  );
});

function mockStore(params = {}) {
  return {
    getState: () => ({
      shots: {
        popularShots: [{}],
        lastUpdated: 0,
        ...params,
      },
    }),
  };
}
