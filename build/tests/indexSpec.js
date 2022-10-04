"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import all numbers.ts exports
const numbers_1 = __importDefault(require("../utilities/numbers"));
// Test spec for sum function in numbers.ts
it('expect numbers.sum(5,10) to equal 15', () => {
    expect(numbers_1.default.sum(5, 10)).toEqual(15);
});
// Test spec for square function in numbers.ts
it('expect numbers.square(10) to equal (100)', () => {
    expect(numbers_1.default.square(10)).toEqual(100);
});
// Test spec for square function in numbers.ts
it('expect numbers.square(10) to equal (100)', () => {
    expect(numbers_1.default.square(-10)).toEqual(100);
});
// Test spec for divide function in numbers.ts
it('expect numbers.divide(12.5,2) to be close to (6.25)', () => {
    expect(numbers_1.default.divide(12.5, 2)).toBeCloseTo(6.25);
});
// Import all arrays.ts exports
const arrays_1 = __importDefault(require("../utilities/arrays"));
// Test spec for cut3 function in arrays.ts
it('expect arrays.cut3(arr) to not equal (arr)', () => {
    expect(arrays_1.default.cut3([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5]);
});
