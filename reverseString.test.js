const reverseString = require('./reverseString');

// Task 2 Test
it('String Reverse function should Reverse the String Given ', () => {
  expect(reverseString('Abu')).toBe('ubA');
  expect(reverseString('Abu kia')).toBe('aik ubA');
});
