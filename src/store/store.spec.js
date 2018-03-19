// @flow
import configureStore from './configureStore';
import { requestShots, fetchShots } from './shots/actions';

let mockReducer;
let store;
let actions;

beforeEach(() => {
  actions = [];
  mockReducer = jest.fn((state = {}, action) => {
    actions = [...actions, action];
    return state;
  });
  store = configureStore({ mock: mockReducer });
});

it('dispatches "REQUEST_SHOT" when "FETCH_SHOTS" fired', async () => {
  expect.assertions(1);
  await store.dispatch(fetchShots());
  expect(mockReducer).toHaveBeenLastCalledWith({}, requestShots());
});
