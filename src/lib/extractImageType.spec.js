// @flow
import extractImageType from './extractImageType';

it('extracts .jpg format from a URL', () => {
  const url = 'https://somehost.com/path/to/image.jpg';
  const type = extractImageType(url);
  expect(type).toEqual('JPG');
});

it('extracts .gif format from a URL', () => {
  const url = 'https://somehost.com/path/to/image.gif';
  const type = extractImageType(url);
  expect(type).toEqual('GIF');
});

it('extracts nothing from empty string', () => {
  const url = '';
  const type = extractImageType(url);
  expect(type).toEqual('');
});
