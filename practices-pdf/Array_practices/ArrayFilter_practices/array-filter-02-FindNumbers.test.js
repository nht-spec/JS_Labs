import { findNumbers } from './array-filter-02-FindNumbers';
describe('findNumbers(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findNumbers({})).toEqual([]);
		expect(findNumbers([])).toEqual([]);
		expect(findNumbers(0)).toEqual([]);
		expect(findNumbers('')).toEqual([]);
	});
	it('should return [] when numberList is wrong number', () => {
		expect(findNumbers([1])).toEqual([]);
		expect(findNumbers([1, 0])).toEqual([]);
		expect(findNumbers([4, 3, 2, 1])).toEqual([]);
		expect(findNumbers([10, 9, 8, 7, 6])).toEqual([]);
	});
	it('should return correct number when numberList is correct', () => {
		expect(findNumbers([1, 2])).toEqual([2]);
		expect(findNumbers([1, 2, 3])).toEqual([2, 3]);
		expect(findNumbers([5, 6, 8, 10])).toEqual([6, 8, 10]);
		expect(findNumbers([12, 11, 14, 12])).toEqual([14]);
	});
});
