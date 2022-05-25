const { summary } = require('./main.js');

test('Summary should return a sum of two numbers', () => {
  expect(summary(11)(22)).toBe(33);
});
