import watchScrollDirection from './watchScrollDirection';

it('memoizes the latest offset', () => {
  const determineScrollDirection = watchScrollDirection();
  determineScrollDirection({ contentOffset: { y: 100 } });
  const direction = determineScrollDirection({
    contentOffset: { y: 100 },
  });
  expect(direction).toEqual('none');
});

it('determines when scroll goes down', () => {
  const determineScrollDirection = watchScrollDirection();
  determineScrollDirection({ contentOffset: { y: 100 } });
  const direction = determineScrollDirection({
    contentOffset: { y: 40 },
  });
  expect(direction).toEqual('up');
});

it('determines when scroll goes down', () => {
  const determineScrollDirection = watchScrollDirection();
  const direction = determineScrollDirection({
    contentOffset: { y: 100 },
  });
  expect(direction).toEqual('down');
});

it('determines when scroll stays in place', () => {
  const determineScrollDirection = watchScrollDirection();
  determineScrollDirection({ contentOffset: { y: 100 } });
  const direction = determineScrollDirection({
    contentOffset: { y: 60 },
  });
  expect(direction).toEqual('none');
});

it('ignores negative scrolling', () => {
  const determineScrollDirection = watchScrollDirection();
  determineScrollDirection({ contentOffset: { y: -30 } });
  const direction = determineScrollDirection({
    contentOffset: { y: -60 },
  });
  expect(direction).toEqual('none');
});

it('does not remember latest scroll position when not moving', () => {
  const determineScrollDirection = watchScrollDirection();
  determineScrollDirection({ contentOffset: { y: 100 } });
  determineScrollDirection({ contentOffset: { y: 60 } });
  const direction = determineScrollDirection({
    contentOffset: { y: 40 },
  });
  expect(direction).toEqual('up');
});
