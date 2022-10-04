// Import all numbers.ts exports
import numbers from '../utilities/numbers';

// Test spec for sum function in numbers.ts
it('expect numbers.sum(5,10) to equal 15', () => {
  expect(numbers.sum(5,10)).toEqual(15);
});

// Test spec for square function in numbers.ts
it('expect numbers.square(10) to equal (100)', () => {
    expect(numbers.square(10)).toEqual(100);
});
// Test spec for square function in numbers.ts
it('expect numbers.square(10) to equal (100)', () => {
    expect(numbers.square(-10)).toEqual(100);
});

// Test spec for divide function in numbers.ts
it('expect numbers.divide(12.5,2) to be close to (6.25)',() =>{
    expect(numbers.divide(12.5,2)).toBeCloseTo(6.25);
});
