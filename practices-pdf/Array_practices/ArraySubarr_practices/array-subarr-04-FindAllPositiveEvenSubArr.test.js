import { findAllPositiveEvenSubArr } from './array-subarr-04-FindAllPositiveEvenSubArr';
describe('findAllPositiveEvenSubArr(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findAllPositiveEvenSubArr([])).toEqual([]);
		expect(findAllPositiveEvenSubArr({})).toEqual([]);
		expect(findAllPositiveEvenSubArr('')).toEqual([]);
		expect(findAllPositiveEvenSubArr(0)).toEqual([]);
	});
	it('should return [] when numberList is has a number < 0, is not a number, dont has a even', () => {
		expect(findAllPositiveEvenSubArr([-1, -2, -4, -6])).toEqual([]);
		expect(findAllPositiveEvenSubArr(['1', [2], { test: 1 }])).toEqual([]);
		expect(findAllPositiveEvenSubArr([1, 3, 5, 7])).toEqual([]);
	});

	it('should return correct value when numberList is correct', () => {
		expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
			[2, 4],
			[10, 20],
		]);
		expect(findAllPositiveEvenSubArr([-1, -2, 2, 4, 6, 8, 3, 4, 6, 10, 20])).toEqual([
			[2, 4, 6, 8],
			[4, 6, 10, 20],
		]);
	});
});
