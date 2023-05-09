const capitalize = require('./capitalize');

// Task 4 Test
it('Capitalize function should Capitalize the First Letter of String Given ', () => {
  expect(capitalize('abu')).toBe('Abu');
});

it('Capitalize function should Throw Error If Integer is Provided ', () => {
  expect(() => {
    capitalize('1234');
  }).toThrowError('You should Provide Alphabet As First Letter Not Number.');
});
