import { isIncreasingNumber } from './number-01-isIncreasing';
describe('isIncreasingNumber(n)', () => {
	it('should return false when n < 0 & n > 1000000', () => {
		expect(isIncreasingNumber(-1)).toBe(false);
		expect(isIncreasingNumber(0)).toBe(false);
		expect(isIncreasingNumber(1000001)).toBe(false);
		expect(isIncreasingNumber([])).toBe(false);
		expect(isIncreasingNumber({})).toBe(false);
		expect(isIncreasingNumber()).toBe(false);
	});
	it('should return false when isIncreasingNumber dont has increasingNumber', () => {
		expect(isIncreasingNumber(11)).toBe(false);
		expect(isIncreasingNumber(121)).toBe(false);
		expect(isIncreasingNumber(1232)).toBe(false);
		expect(isIncreasingNumber(123451)).toBe(false);
		expect(isIncreasingNumber(12345674)).toBe(false);
	});
	it('should return true when isIncreasingNumber has increasingNumber', () => {
		expect(isIncreasingNumber(12)).toBe(true);
		expect(isIncreasingNumber(123)).toBe(true);
		expect(isIncreasingNumber(123456)).toBe(true);
		expect(isIncreasingNumber(123456)).toBe(true);
	});
});
