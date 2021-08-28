import { findMaxSumArray } from './array-subarr-06-FindMaxSumArray';
describe('findMaxSumArray(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findMaxSumArray([])).toEqual([]);
		expect(findMaxSumArray({})).toEqual([]);
		expect(findMaxSumArray('')).toEqual([]);
		expect(findMaxSumArray(0)).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(findMaxSumArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([]);
		expect(findMaxSumArray([{ test: 1 }, '12', [12, 2], true, false])).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(findMaxSumArray([1, 2, 3, 0, 2, 4])).toEqual([1, 2, 3]);
		expect(findMaxSumArray([1, 2, 3])).toEqual([1, 2, 3]);
		expect(findMaxSumArray([1, 2, 3, 2, 4, 6])).toEqual([2, 4, 6]);
		expect(findMaxSumArray([1, 2, 1, 7, 8, 2, 4])).toEqual([1, 7, 8]);
	});
});
