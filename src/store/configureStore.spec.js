// @flow
import configureStore from './configureStore';

it('creates a store', () => {
  const store = configureStore();
  expect(store.getState()).toHaveProperty('shots');
});
