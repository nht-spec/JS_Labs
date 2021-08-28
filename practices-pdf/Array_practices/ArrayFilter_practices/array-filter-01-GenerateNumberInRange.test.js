import { generateNumberInRange } from './array-filter-01-GenerateNumberInRange';
describe('generateNumberInRange(a,b)', () => {
	it('should  return [] when (a,b) is not number or < 0 and a > b', () => {
		expect(generateNumberInRange('', [])).toEqual([]);
		expect(generateNumberInRange('', '')).toEqual([]);
		expect(generateNumberInRange({}, [])).toEqual([]);
		expect(generateNumberInRange([], [])).toEqual([]);
		expect(generateNumberInRange(-1, -1)).toEqual([]);
	});
	it('should  return [] when a > b', () => {
		expect(generateNumberInRange(3, 2)).toEqual([]);
		expect(generateNumberInRange(13, 5)).toEqual([]);
		expect(generateNumberInRange(2, 1)).toEqual([]);
		expect(generateNumberInRange(23, 12)).toEqual([]);
	});
	it('should  return correct number when a < b', () => {
		expect(generateNumberInRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
		expect(generateNumberInRange(0, 3)).toEqual([0, 1, 2, 3]);
		expect(generateNumberInRange(11, 15)).toEqual([11, 12, 13, 14, 15]);
		expect(generateNumberInRange(5, 7)).toEqual([5, 6, 7]);
	});
});
