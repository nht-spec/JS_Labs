import { countUniqueNumbers } from './array-count-04-CountUniqueNumbers';
describe('countUniqueNumbers(numberList) ', () => {
	it('should return 0 when numberList is empty or is not array', () => {
		expect(countUniqueNumbers([])).toEqual(0);
		expect(countUniqueNumbers({})).toEqual(0);
		expect(countUniqueNumbers('')).toEqual(0);
		expect(countUniqueNumbers(0)).toEqual(0);
	});
	it('should return 0 when numberList is not a number', () => {
		expect(countUniqueNumbers(['thinh', { test: 1 }, [12]])).toEqual(0);
		expect(countUniqueNumbers(['', {}, false])).toEqual(0);
		expect(countUniqueNumbers(['12', 'aq'])).toEqual(0);
	});
	it('should return correct value when numberList is a number', () => {
		expect(countUniqueNumbers([12, 1, 2, 3, 44])).toEqual(5);
		expect(countUniqueNumbers([1, 2, 2, 3, 1])).toEqual(3);
		expect(countUniqueNumbers([1, 1, 1])).toEqual(1);
	});
});
