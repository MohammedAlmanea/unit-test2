// Import all numbers.ts exports
import numbers from '../utilities/numbers';

// Test spec for sum function in numbers.ts
it('expect sum(5,10) to equal 15', () => {
  expect(numbers.sum(5,10)).toEqual(15);
});
