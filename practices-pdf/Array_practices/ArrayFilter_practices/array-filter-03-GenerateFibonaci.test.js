import { generateFibonaci } from './array-filter-03-GenerateFibonaci';
describe(' generateFibonaci(n)', () => {
	it('should return [] when n is not number or n <=0 or n >=1000', () => {
		expect(generateFibonaci([])).toEqual([]);
		expect(generateFibonaci({})).toEqual([]);
		expect(generateFibonaci('')).toEqual([]);
		expect(generateFibonaci(-1)).toEqual([]);
		expect(generateFibonaci(0)).toEqual([]);
		expect(generateFibonaci(1000)).toEqual([]);
		expect(generateFibonaci(1001)).toEqual([]);
	});
	it('should return correct when n correct number', () => {
		expect(generateFibonaci(5)).toEqual([0, 1, 1, 2, 3]);
		expect(generateFibonaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
		expect(generateFibonaci(25)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
	});
});
