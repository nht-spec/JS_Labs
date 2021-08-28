import { hasTwoDigitsWithSum } from './number-09-HasTwoDigitsWithSum';
describe('hasTwoDigitsWithSum(n, sum)', () => {
	test('should return false when 9 < n > 1000000 &  sum <= 0 & sum > 19', () => {
		expect(hasTwoDigitsWithSum(-1, -1)).toBe(false);
		expect(hasTwoDigitsWithSum(-1, 19)).toBe(false);
		expect(hasTwoDigitsWithSum(0, 19)).toBe(false);
		expect(hasTwoDigitsWithSum(0, 0)).toBe(false);
		expect(hasTwoDigitsWithSum(1000000, 0)).toBe(false);
		expect(hasTwoDigitsWithSum({}, {})).toBe(false);
		expect(hasTwoDigitsWithSum([], [])).toBe(false);
		expect(hasTwoDigitsWithSum('', '')).toBe(false);
		expect(hasTwoDigitsWithSum({}, '')).toBe(false);
	});
	test('should return false when n dont has two digits with sum', () => {
		expect(hasTwoDigitsWithSum(12, 1)).toBe(false);
		expect(hasTwoDigitsWithSum(11, 3)).toBe(false);
		expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
		expect(hasTwoDigitsWithSum(1023, 6)).toBe(false);
		expect(hasTwoDigitsWithSum(1223, 6)).toBe(false);
	});
	test('should return true when n has two digits with sum', () => {
		expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
		expect(hasTwoDigitsWithSum(12, 3)).toBe(true);
		expect(hasTwoDigitsWithSum(14, 5)).toBe(true);
		expect(hasTwoDigitsWithSum(101, 2)).toBe(true);
		expect(hasTwoDigitsWithSum(1021, 2)).toBe(true);
		expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
	});
});
