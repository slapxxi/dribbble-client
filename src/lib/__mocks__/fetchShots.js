function fetchShotsMock(type = 'popular') {
  return Promise.resolve({
    type,
    shots: [],
    users: [],
  });
}

export default fetchShotsMock;
