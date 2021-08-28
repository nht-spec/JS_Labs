import { countUniqueNumbers, countUniqueNumbers2 } from './array-count-04';

describe('countUniqueNumbers(numberList)', () => {
	it('should return 0 if empty', () => {
		expect(countUniqueNumbers([])).toBe(0);
		expect(countUniqueNumbers({})).toBe(0);
		expect(countUniqueNumbers('')).toBe(0);
		expect(countUniqueNumbers(true)).toBe(0);
		expect(countUniqueNumbers(123)).toBe(0);
	});
	it('should return length if list is unique', () => {
		expect(countUniqueNumbers([1])).toBe(1);
		expect(countUniqueNumbers([1, 2])).toBe(2);
		expect(countUniqueNumbers([1, 2, 3])).toBe(3);
	});
	it('should return correct count of unique numbers', () => {
		expect(countUniqueNumbers([1, 1, 1])).toBe(1);
		expect(countUniqueNumbers([1, 1, 2, 2, 2])).toBe(2);
		expect(countUniqueNumbers([1, 3, 1, 3, 2, 2, 2, 3])).toBe(3);
	});
});

describe('countUniqueNumbers(numberList)', () => {
	it('should return 0 if empty', () => {
		expect(countUniqueNumbers2([])).toBe(0);
		expect(countUniqueNumbers2({})).toBe(0);
		expect(countUniqueNumbers2('')).toBe(0);
		expect(countUniqueNumbers2(true)).toBe(0);
		expect(countUniqueNumbers2(123)).toBe(0);
	});
	it('should return length if list is unique', () => {
		expect(countUniqueNumbers2([1])).toBe(1);
		expect(countUniqueNumbers2([1, 2])).toBe(2);
		expect(countUniqueNumbers2([1, 2, 3])).toBe(3);
	});
	it('should return correct count of unique numbers', () => {
		expect(countUniqueNumbers2([1, 1, 1])).toBe(1);
		expect(countUniqueNumbers2([1, 1, 2, 2, 2])).toBe(2);
		expect(countUniqueNumbers2([1, 3, 1, 3, 2, 2, 2, 3])).toBe(3);
	});
});
