import { findMinPositive } from './array-find-01-FindMinPositive';
describe('findMinPositive(numberList)', () => {
	it('should return undefined when numberList is empty or is not array', () => {
		expect(findMinPositive([])).toBe(undefined);
		expect(findMinPositive({})).toBe(undefined);
		expect(findMinPositive(0)).toBe(undefined);
		expect(findMinPositive('')).toBe(undefined);
	});
	it('should return undefined when numberList is not correct', () => {
		expect(findMinPositive([-1, -2, -3])).toBe(undefined);
		expect(findMinPositive([-13, 't', -3])).toBe(undefined);
		expect(findMinPositive([-102, -103, -54])).toBe(undefined);
		expect(findMinPositive(['wq', { sa: 'thinh' }, false])).toBe(undefined);
	});
	it('should return correct number when numberList is correct', () => {
		expect(findMinPositive([0, 1, 2])).toBe(0);
		expect(findMinPositive([3, 4, 8])).toBe(3);
		expect(findMinPositive([100, 400, 200])).toBe(100);
		expect(findMinPositive([1023, 900, 3000])).toBe(900);
	});
});
