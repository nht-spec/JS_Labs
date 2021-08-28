import { sumEvenNumbers } from './array-sum-01-SumEvenNumbers';
describe('sumEvenNumbers(numberList)', () => {
	it('should return 0 when numberList is empty or is not array', () => {
		expect(sumEvenNumbers([])).toEqual(0);
		expect(sumEvenNumbers({})).toEqual(0);
		expect(sumEvenNumbers('')).toEqual(0);
		expect(sumEvenNumbers(0)).toEqual(0);
	});
	it('should return 0 when value of numberList is not number', () => {
		expect(sumEvenNumbers(['123', { test: 1 }, false])).toEqual(0);
		expect(sumEvenNumbers(['', { test: 1 }, false, [1]])).toEqual(0);
		expect(sumEvenNumbers([{ test: 1 }, false, ['thinh']])).toEqual(0);
	});
	it('should return correct value when numberList correct', () => {
		expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toEqual(6);
		expect(sumEvenNumbers([2, 8, 5, 4])).toEqual(8);
		expect(sumEvenNumbers([2, 10, 12, 4])).toEqual(22);
	});
});
