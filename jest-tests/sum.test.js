const sum = require('../jest-tests/sum');
// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });
test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

