import { findAllIncreasingSubArr } from './array-subarr-01-FindAllIncreasingSubArr';
describe('findAllIncreasingSubArr(numberList)', () => {
	it('should return [] when numberList is empty or is not array ', () => {
		expect(findAllIncreasingSubArr([])).toEqual([]);
		expect(findAllIncreasingSubArr({})).toEqual([]);
		expect(findAllIncreasingSubArr('')).toEqual([]);
		expect(findAllIncreasingSubArr(0)).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(findAllIncreasingSubArr([10, 9, 8, 7, 6, 5])).toEqual([]);
		expect(findAllIncreasingSubArr([{ key: 1 }, '2', '12', [7, 6, 5]])).toEqual([]);
		expect(findAllIncreasingSubArr([undefined, null, [7, 6, 5]])).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(findAllIncreasingSubArr([10, 11, 8, 7, 6, 7])).toEqual([
			[10, 11],
			[6, 7],
		]);
		expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
			[1, 2, 3],
			[-10, 5, 10],
		]);
	});
});
