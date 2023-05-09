const stringLength = require('./stringLength');

it('String Length function should work ', () => {
  expect(stringLength('Abu')).toBe(3);
  expect(stringLength('Abu kia')).toBe(7);
});

it('String Length function should throw Error if Given string Length is not between 1 to 10 Including ', () => {
  expect(() => {
    stringLength('abcdddddddddddddddddddddd');
  }).toThrowError('The String Length is Not Between 1 to 10 including');
});
