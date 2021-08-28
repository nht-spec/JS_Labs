import { findFirstPositiveEven } from './array-find-03-FindFirstPositiveEven';
describe('findFirstPositiveEven(numberList)', () => {
	it('should return undefined when numberList is empty or is not array', () => {
		expect(findFirstPositiveEven([])).toBe(undefined);
		expect(findFirstPositiveEven({})).toBe(undefined);
		expect(findFirstPositiveEven('')).toBe(undefined);
		expect(findFirstPositiveEven(0)).toBe(undefined);
	});

	it('should return undefined when numberList is not correct', () => {
		expect(findFirstPositiveEven([-1, -3, 0])).toBe(undefined);
		expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
		expect(findFirstPositiveEven([1, 7, 13])).toBe(undefined);
	});
	it('should return correct number when numberList is correct', () => {
		expect(findFirstPositiveEven([1, 4, 5])).toBe(4);
		expect(findFirstPositiveEven([1, 6, 2])).toBe(6);
		expect(findFirstPositiveEven([5, 7, 12])).toBe(12);
	});
});
