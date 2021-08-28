import { generatePrimeNumbers } from './array-filter-04-GeneratePrimeNumbers';
describe('generatePrimeNumbers(n)', () => {
	it('should return [] when n is not number or n <=0 or n>=1000 ', () => {
		expect(generatePrimeNumbers([])).toEqual([]);
		expect(generatePrimeNumbers({})).toEqual([]);
		expect(generatePrimeNumbers('')).toEqual([]);
		expect(generatePrimeNumbers(0)).toEqual([]);
		expect(generatePrimeNumbers(1000)).toEqual([]);
		expect(generatePrimeNumbers(-1)).toEqual([]);
		expect(generatePrimeNumbers(1001)).toEqual([]);
	});
	it('should return correct value when n is correct', () => {
		expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
		expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
		expect(generatePrimeNumbers(15)).toEqual([2, 3, 5, 7, 11, 13]);
		expect(generatePrimeNumbers(6)).toEqual([2, 3, 5]);
	});
});
