import { hasOddNumberDivisibleBy3 } from './array-check-02-HasOddNumberDivisibleBy3';
describe(' hasOddNumberDivisibleBy3(numberList)', () => {
	it('should return false when numberList empty or numberList is not array', () => {
		expect(hasOddNumberDivisibleBy3([])).toBe(false);
		expect(hasOddNumberDivisibleBy3(0)).toBe(false);
		expect(hasOddNumberDivisibleBy3('')).toBe(false);
		expect(hasOddNumberDivisibleBy3({})).toBe(false);
	});
	it('should return false when numberList dont has oddNumber', () => {
		expect(hasOddNumberDivisibleBy3([2, 4, 6, 8])).toBe(false);
		expect(hasOddNumberDivisibleBy3([10, 12, 14, 16, 18])).toBe(false);
		expect(hasOddNumberDivisibleBy3([102, 104, 124, 138])).toBe(false);
		expect(hasOddNumberDivisibleBy3([42, 44, 56, 66, 78, 80])).toBe(false);
	});
	it('should return false when numberList has oddNumber dont divisible by 3', () => {
		expect(hasOddNumberDivisibleBy3([1, 5, 7])).toBe(false);
		expect(hasOddNumberDivisibleBy3([11, 13, 19])).toBe(false);
		expect(hasOddNumberDivisibleBy3([121, 145, 257])).toBe(false);
	});
	it('should return true when numberList has oddNumber and divisible by 3', () => {
		expect(hasOddNumberDivisibleBy3([1, 6])).toBe(true);
		expect(hasOddNumberDivisibleBy3([3, 8, 15])).toBe(true);
		expect(hasOddNumberDivisibleBy3([120, 145, 999])).toBe(true);
	});
});
