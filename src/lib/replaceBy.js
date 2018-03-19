import { uniqBy } from 'lodash';

function replaceBy(first, second, iteratee) {
  let result = [];
  return [...first, ...second].map((item) => {
    let replacement = item;
    return replacement;
  });
}
