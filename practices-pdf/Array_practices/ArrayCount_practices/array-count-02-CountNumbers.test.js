import { countNumbers } from './array-count-02-CountNumbers';
describe('countNumbers(numberList) ', () => {
	it('should return 0 when numberList is empty or is not array ', () => {
		expect(countNumbers([])).toEqual(0);
		expect(countNumbers({})).toEqual(0);
		expect(countNumbers('')).toEqual(0);
		expect(countNumbers()).toEqual(0);
	});
	it('should return 0 when numberList dont has correct number', () => {
		expect(countNumbers([1, 2, 3])).toEqual(0);
		expect(countNumbers([1, 3, 3])).toEqual(0);
		expect(countNumbers([1, 3, 4, 5])).toEqual(0);
	});
	it('should return correct number when numberList has correct number', () => {
		expect(countNumbers([1, 2, 3, 10, 9, 8])).toEqual(2);
		expect(countNumbers([1, 3, 3, 2, 1])).toEqual(2);
		expect(countNumbers([1, 5, 6, 5, 4, 3])).toEqual(3);
	});
});
