import { hasTruthy } from './array-check-04-HasTruthy';
describe('hasTruthy(arr) ', () => {
	it('should return false when arr is empty or arr is not array', () => {
		expect(hasTruthy([])).toBe(false);
		expect(hasTruthy({})).toBe(false);
		expect(hasTruthy('')).toBe(false);
		expect(hasTruthy(0)).toBe(false);
	});
	it('should return false when arr is not has truthy', () => {
		expect(hasTruthy([false, ''])).toBe(false);
		expect(hasTruthy([0, null])).toBe(false);
		expect(hasTruthy([undefined])).toBe(false);
		expect(hasTruthy([NaN, '', ``])).toBe(false);
		expect(hasTruthy([-0, 0n])).toBe(false);
	});
	it('should return true when arr is has truthy', () => {
		expect(hasTruthy([true, ''])).toBe(true);
		expect(hasTruthy([123, null])).toBe(true);
		expect(hasTruthy(['thinh', undefined, 3])).toBe(true);
		expect(hasTruthy([NaN, true, `a`])).toBe(true);
	});
});
