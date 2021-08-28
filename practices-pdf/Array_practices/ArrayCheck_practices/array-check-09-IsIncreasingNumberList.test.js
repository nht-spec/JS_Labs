import { isIncreasingNumberList } from './array-check-09-IsIncreasingNumberList';
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
		expect(isIncreasingNumberList([3, 2, 2])).toBe(false);
		expect(isIncreasingNumberList([7, 8, 10, 1])).toBe(false);
		expect(isIncreasingNumberList([9, 1, 23, 2])).toBe(false);
	});
	it('should return true when numberList is correct', () => {
		expect(isIncreasingNumberList([1, 2, 3])).toBe(true);
		expect(isIncreasingNumberList([3, 4, 5])).toBe(true);
		expect(isIncreasingNumberList([10, 12, 101, 105])).toBe(true);
		expect(isIncreasingNumberList([200, 300, 500, 800])).toBe(true);
	});
});
