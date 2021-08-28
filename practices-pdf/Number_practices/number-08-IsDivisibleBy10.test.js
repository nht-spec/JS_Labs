import { isDivisibleBy10 } from './number-08-IsDivisibleBy10';
describe(' isDivisibleBy10(n)', () => {
	test('should return false when n <= 0 & n > 1000000 ', () => {
		expect(isDivisibleBy10(-1)).toBe(false);
		expect(isDivisibleBy10(0)).toBe(false);
		expect(isDivisibleBy10(1000000)).toBe(false);
		expect(isDivisibleBy10({})).toBe(false);
		expect(isDivisibleBy10([])).toBe(false);
	});
	test('should return false when n is not a divisibleBy10', () => {
		[10, 11, 1233, 123457, 12348, 3, 4, 9].forEach((x) => {
			expect(isDivisibleBy10(x)).toBe(false);
		});
	});
	test('should return false when n <= 0 & n > 1000000 ', () => {
		[1234, 123455, 555555, 234551].forEach((x) => {
			expect(isDivisibleBy10(x)).toBe(true);
		});
	});
});
