import { countPositiveEvenNumbers } from './array-count-01-CountPositiveEvenNumbers';
describe('countPositiveEvenNumbers(numberList)', () => {
	it('should return 0 when numberList is empty or not array', () => {
		expect(countPositiveEvenNumbers([])).toEqual(0);
		expect(countPositiveEvenNumbers({})).toEqual(0);
		expect(countPositiveEvenNumbers('')).toEqual(0);
		expect(countPositiveEvenNumbers(0)).toEqual(0);
	});
	it('should return 0 when numberList dont has a number > 0', () => {
		expect(countPositiveEvenNumbers([-2, -1])).toEqual(0);
		expect(countPositiveEvenNumbers(['-2', -1])).toEqual(0);
		expect(countPositiveEvenNumbers([-12, -1])).toEqual(0);
	});
	it('should return 0 when numberList dont has event', () => {
		expect(countPositiveEvenNumbers([-2, -1, 1, 3, 7, 11])).toEqual(0);
		expect(countPositiveEvenNumbers(['-2', 103, 147])).toEqual(0);
		expect(countPositiveEvenNumbers([1])).toEqual(0);
	});
	it('should return correct value when numberList has event', () => {
		expect(countPositiveEvenNumbers([-2, -1, 2, 4, 6, 11])).toEqual(3);
		expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toEqual(2);
		expect(countPositiveEvenNumbers([102, 144, 206, 1002, 1020])).toEqual(5);
	});
});
