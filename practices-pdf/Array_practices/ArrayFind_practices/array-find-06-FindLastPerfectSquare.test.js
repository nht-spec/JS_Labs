import { findLastPerfectSquare } from './array-find-06-FindLastPerfectSquare';
describe('findLastPerfectSquare(numberList)', () => {
	it('should return undefined when numberList is empty or not array', () => {
		expect(findLastPerfectSquare([])).toBe(undefined);
		expect(findLastPerfectSquare({})).toBe(undefined);
		expect(findLastPerfectSquare(0)).toBe(undefined);
		expect(findLastPerfectSquare('')).toBe(undefined);
	});
	it('should return undefined when numberList is wrong', () => {
		expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
		expect(findLastPerfectSquare([7, 11, 13])).toBe(undefined);
		expect(findLastPerfectSquare([2, 3, 7, 8])).toBe(undefined);
		expect(findLastPerfectSquare([12, 33, 27, 18])).toBe(undefined);
	});

	it('should return undefined when numberList is wrong', () => {
		expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
		expect(findLastPerfectSquare([4, 16, 25])).toBe(25);
		expect(findLastPerfectSquare([4, 6])).toBe(4);
		expect(findLastPerfectSquare([9, 5, 4, 1])).toBe(1);
	});
});
