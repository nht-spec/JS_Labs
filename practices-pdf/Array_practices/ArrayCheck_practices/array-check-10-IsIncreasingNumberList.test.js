import { isIncreasingNumberList } from './array-check-10-IsIncreasingNumberList';
describe('isIncreasingNumberList(numberList)', () => {
	it('should return false when numberList is empty or is not array ', () => {
		expect(isIncreasingNumberList([])).toBe(false);
		expect(isIncreasingNumberList({})).toBe(false);
		expect(isIncreasingNumberList('')).toBe(false);
		expect(isIncreasingNumberList(0)).toBe(false);
	});
	it('should return false when numberList is has 1 element', () => {
		expect(isIncreasingNumberList([1])).toBe(false);
		expect(isIncreasingNumberList([3])).toBe(false);
		expect(isIncreasingNumberList([7])).toBe(false);
		expect(isIncreasingNumberList([9])).toBe(false);
	});
	it('should return false when numberList is dont correct', () => {
		expect(isIncreasingNumberList([1, 2, 1])).toBe(false);
		expect(isIncreasingNumberList([3, 2, 5])).toBe(false);
		expect(isIncreasingNumberList([7, 8, 10, 11])).toBe(false);
		expect(isIncreasingNumberList([9, 12, 23, 25])).toBe(false);
	});
	it('should return true when numberList is correct', () => {
		expect(isIncreasingNumberList([3, 2, 1])).toBe(true);
		expect(isIncreasingNumberList([5, 4, 3])).toBe(true);
		expect(isIncreasingNumberList([12, 11, 10, 9])).toBe(true);
		expect(isIncreasingNumberList([800, 600, 500, 20])).toBe(true);
	});
});
