import { isIncreasingNumberByDistance } from './number-03-IncreasingNumberByDistance';
describe(' isIncreasingNumberByDistance(n, x)', () => {
	test('should return false when n <= 0 & n > 1000000 & x <= 0 & x > 5  ', () => {
		expect(isIncreasingNumberByDistance(-1, -1)).toBe(false);
		expect(isIncreasingNumberByDistance(0, 0)).toBe(false);
		expect(isIncreasingNumberByDistance()).toBe(false);
		expect(isIncreasingNumberByDistance([], 0)).toBe(false);
		expect(isIncreasingNumberByDistance([], [])).toBe(false);
		expect(isIncreasingNumberByDistance(0, [])).toBe(false);
		expect(isIncreasingNumberByDistance(0, 5)).toBe(false);
	});
	test('should return false when n dont has increasing number by distance ', () => {
		expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
		expect(isIncreasingNumberByDistance(135, 1)).toBe(false);
		expect(isIncreasingNumberByDistance(13456, 4)).toBe(false);
		expect(isIncreasingNumberByDistance(13456, 3)).toBe(false);
	});
	test('should return true n has increasing number by distance', () => {
		expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
		expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
		expect(isIncreasingNumberByDistance(147, 3)).toBe(true);
	});
});
