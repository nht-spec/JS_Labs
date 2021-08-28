import { findAllNumbers } from './array-filter-05-FindAllNumbers';
describe('findAllNumbers(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findAllNumbers([])).toEqual([]);
		expect(findAllNumbers({})).toEqual([]);
		expect(findAllNumbers('')).toEqual([]);
		expect(findAllNumbers(0)).toEqual([]);
	});

	it('should return [] when numberList is not correct', () => {
		expect(findAllNumbers([1, 3, 5])).toEqual([]);
		expect(findAllNumbers([1, 2, 5])).toEqual([]);
		expect(findAllNumbers([1, 2, 4, 5])).toEqual([]);
	});

	it('should return correct number when numberList is correct', () => {
		expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]);
		expect(findAllNumbers([1, 6, 6, -6, 6, 6, 4])).toEqual([6, 6, 6]);
		expect(findAllNumbers([4, 4, 4, -6, 4, 5, 4])).toEqual([4, 4, 4, 4]);
	});
});
