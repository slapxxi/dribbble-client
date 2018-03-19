// @flow
import fetchShots from './fetchShots';

it('fetches latest shots', async () => {
  expect.assertions(2);
  const response = await fetchShots();
  expect(response.shots.length).toEqual(16);
  expect(response).toHaveProperty('users');
});
