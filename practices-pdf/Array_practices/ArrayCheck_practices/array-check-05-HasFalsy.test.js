import { hasFalsy } from './array-check-05-HasFalsy';
describe('hasFalsy(arr) ', () => {
	it('should return false when arr is empty or arr is not array', () => {
		expect(hasFalsy([])).toBe(false);
		expect(hasFalsy({})).toBe(false);
		expect(hasFalsy('')).toBe(false);
		expect(hasFalsy(0)).toBe(false);
	});
	it('should return false when arr is not has truthy', () => {
		expect(hasFalsy([true, '123'])).toBe(false);
		expect(hasFalsy([123, [12]])).toBe(false);
		expect(hasFalsy(['th', 2])).toBe(false);
		expect(hasFalsy([true, 'as', `21`])).toBe(false);
	});
	it('should return true when arr is has truthy', () => {
		expect(hasFalsy([true, ''])).toBe(true);
		expect(hasFalsy([123, null])).toBe(true);
		expect(hasFalsy(['thinh', undefined, 3])).toBe(true);
		expect(hasFalsy([NaN, true, `a`])).toBe(true);
	});
});
