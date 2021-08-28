import { findAllDecreasingSubArr } from './array-subarr-02-FindAllDecreasingSubAr';
describe('findAllDecreasingSubArr(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findAllDecreasingSubArr([])).toEqual([]);
		expect(findAllDecreasingSubArr({})).toEqual([]);
		expect(findAllDecreasingSubArr(0)).toEqual([]);
		expect(findAllDecreasingSubArr('')).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(findAllDecreasingSubArr([{ test: 1 }, '123', [23]])).toEqual([]);
		expect(findAllDecreasingSubArr([1, 2, 3, 4, 5, 6])).toEqual([]);
		expect(findAllDecreasingSubArr([3, 2, 4, 3, 5, 1])).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(findAllDecreasingSubArr([3, 2, 1, 3, 2, 1])).toEqual([
			[3, 2, 1],
			[3, 2, 1],
		]);
		expect(findAllDecreasingSubArr([3, 2, 1, 3, 2])).toEqual([[3, 2, 1]]);
		expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]);
	});
});
