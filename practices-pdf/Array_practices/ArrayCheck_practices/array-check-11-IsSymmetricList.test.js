import { isSymmetricList } from './array-check-11-IsSymmetricList';
describe(' isSymmetricList(numberList)', () => {
	it('should return false when numberList is empty or is not array', () => {
		expect(isSymmetricList([])).toBe(false);
		expect(isSymmetricList({})).toBe(false);
		expect(isSymmetricList('')).toBe(false);
		expect(isSymmetricList(0)).toBe(false);
	});
	it('should return false when numberList is not correct', () => {
		expect(isSymmetricList([1, 2, 3])).toBe(false);
		expect(isSymmetricList([1, 2, 2])).toBe(false);
		expect(isSymmetricList([1, 2, 3, 4])).toBe(false);
		expect(isSymmetricList([1, 2, 2])).toBe(false);
	});
	it('should return true when numberList is correct', () => {
		expect(isSymmetricList([1, 2, 1])).toBe(true);
		expect(isSymmetricList([1])).toBe(true);
		expect(isSymmetricList([1, 2, 2, 1])).toBe(true);
		expect(isSymmetricList([1, 2, 3, 3, 2, 1])).toBe(true);
	});
});
