import { findIndex, filter } from 'lodash';

function updateCollection(first, second, iteratee) {
  const original = [];
  let remaining = second;
  first.forEach((item) => {
    const i = findIndex(
      remaining,
      (newItem) => iteratee(item) === iteratee(newItem),
    );
    if (i === -1) {
      original.push(item);
    } else {
      original.push(remaining[i]);
      remaining = filter(remaining, (_, index) => index !== i);
    }
  });
  return [...original, ...remaining];
}

export default updateCollection;
