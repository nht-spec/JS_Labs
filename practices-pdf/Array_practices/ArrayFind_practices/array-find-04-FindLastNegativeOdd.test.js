import { findLastNegativeOdd } from './array-find-04-FindLastNegativeOdd';
describe('findLastNegativeOdd(numberList)', () => {
	it('should return undefined when numberList is empty or is not array', () => {
		expect(findLastNegativeOdd([])).toBe(undefined);
		expect(findLastNegativeOdd({})).toBe(undefined);
		expect(findLastNegativeOdd('')).toBe(undefined);
		expect(findLastNegativeOdd(0)).toBe(undefined);
	});
	it('should return undefined when numberList is wrong', () => {
		expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
		expect(findLastNegativeOdd([0, 9, 12])).toBe(undefined);
		expect(findLastNegativeOdd(['12', 2, 3])).toBe(undefined);
	});
	it('should return correct number when numberList is correct', () => {
		expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
		expect(findLastNegativeOdd([-7, -2, -4])).toBe(-7);
		expect(findLastNegativeOdd([2, 3, -3])).toBe(-3);
	});
});
