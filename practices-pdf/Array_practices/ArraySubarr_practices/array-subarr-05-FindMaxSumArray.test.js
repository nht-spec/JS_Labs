import { findMaxSumArray } from './array-subarr-05-FindMaxSumArray';
describe('findMaxSumArray(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findMaxSumArray([])).toEqual([]);
		expect(findMaxSumArray({})).toEqual([]);
		expect(findMaxSumArray('')).toEqual([]);
		expect(findMaxSumArray(0)).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(findMaxSumArray([{ test: 1 }, '12', [12]])).toEqual([]);
		expect(findMaxSumArray([true, false])).toEqual([]);
		expect(findMaxSumArray([null, undefined])).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(findMaxSumArray([1, 2, 3])).toEqual(6);
		expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toEqual(30);
		expect(findMaxSumArray([2, 3, 1, 0, 1, 2, 3, 2, 6])).toEqual(8);
	});
});
