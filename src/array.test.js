import { isPrimeV1 } from './array';

describe('isPrimeV1', () => {
	test('should return false when n < 0 and > 1000  ', () => {
		const value = isPrimeV1(-1 || 1001);
		expect(value).toBe(false);
	});
	test('should return true when n % i = 1  ', () => {
		[2, 3, 5, 7, 11].forEach((n) => {
			expect(isPrimeV1(n)).toBe(true);
		});
	});
	test('should return false when n=1 ', () => {
		[1].forEach((n) => {
			expect(isPrimeV1(n)).toBe(false);
		});
	});
	test('should return false when no has prime ', () => {
		[4, 6, 8, 10, 12].forEach((n) => {
			expect(isPrimeV1(n)).toBe(false);
		});
	});
});
