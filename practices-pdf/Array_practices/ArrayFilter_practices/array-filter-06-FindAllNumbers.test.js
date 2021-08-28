import { findAllNumbers } from './array-filter-06-FindAllNumbers';
describe('findAllNumbers(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(findAllNumbers([])).toEqual([]);
		expect(findAllNumbers({})).toEqual([]);
		expect(findAllNumbers('')).toEqual([]);
		expect(findAllNumbers(0)).toEqual([]);
	});
	it('should return [] when numberList dont has odd', () => {
		expect(findAllNumbers([2, 4, 6])).toEqual([]);
		expect(findAllNumbers([213, 413, 657])).toEqual([]);
		expect(findAllNumbers([63, 4, 6])).toEqual([]);
	});
	it('should return correct when numberList has odd', () => {
		expect(findAllNumbers([2, 1, 5])).toEqual([1, 5]);
		expect(findAllNumbers([213, 413, 657, 123, 34])).toEqual([123, 34]);
		expect(findAllNumbers([32, 14, 56])).toEqual([32, 14, 56]);
	});
});
