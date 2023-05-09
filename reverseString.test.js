const reverseString = require('./reverseString');

it('String Reverse function should Reverse the String Given ', () => {
  expect(reverseString('Abu')).toBe('ubA');
  expect(reverseString('Abu kia')).toBe('aik ubA');
});
