import updateCollection from './updateCollection';

it('updates collection with new values meeting criteria', () => {
  const first = [
    { id: 0, v: 'old' },
    { id: 1, v: 'old' },
    { id: 2, v: 'old' },
  ];
  const second = [
    { id: 3, v: 'new' },
    { id: 1, v: 'new' },
    { id: 4, v: 'new' },
  ];
  const result = updateCollection(first, second, (item) => item.id);
  expect(result).toEqual([
    { id: 0, v: 'old' },
    { id: 1, v: 'new' },
    { id: 2, v: 'old' },
    { id: 3, v: 'new' },
    { id: 4, v: 'new' },
  ]);
});
