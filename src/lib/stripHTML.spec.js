// @flow
import stripHTML from './stripHTML';

it('removes tags', () => {
  const result = stripHTML('<a>link to something</a>');
  expect(result).toEqual('link to something');
});

it('removes nested tags', () => {
  const result = stripHTML(
    '<div>tag <div>with nested text</div></div>',
  );
  expect(result).toEqual('tag with nested text');
});

it('removes tags with attributes', () => {
  const result = stripHTML('<div class="cls">text</div>');
  expect(result).toEqual('text');
});

it('preserves text beyond tags', () => {
  const result = stripHTML('some <div>text</div>');
  expect(result).toEqual('some text');
});
