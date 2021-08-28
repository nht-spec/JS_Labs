import { isPrime } from './number-04-IsPrime';
describe('isPrime(n)', () => {
	test('should return false when n <= 0 & n > 1000000', () => {
		expect(isPrime(-1)).toBe(false);
		expect(isPrime(0)).toBe(false);
		expect(isPrime(1000001)).toBe(false);
		expect(isPrime({})).toBe(false);
		expect(isPrime([])).toBe(false);
		expect(isPrime()).toBe(false);
	});
	test('should return false when n dont has prime', () => {
		[4, 6, 8, 12, 10].forEach((x) => {
			expect(isPrime(x)).toBe(false);
		});
	});
	test('should return true when n has prime', () => {
		[
			2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
			79, 83, 89, 97,
		].forEach((x) => {
			expect(isPrime(x)).toBe(true);
		});
	});
});
