import { findMostFrequentNumber } from './logic-04-FindMostFrequentNumber';
describe('findMostFrequentNumber(numberList)', () => {
	it('should return 0 when numberlist is empty or is not array', () => {
		expect(findMostFrequentNumber([])).toEqual(0);
		expect(findMostFrequentNumber({})).toEqual(0);
		expect(findMostFrequentNumber('')).toEqual(0);
		expect(findMostFrequentNumber(0)).toEqual(0);
	});
	it('should return 0 when numberlist is not correct', () => {
		expect(findMostFrequentNumber([{ Test: 1 }, '12', [12, 't']])).toEqual(0);
		expect(findMostFrequentNumber([undefined, null])).toEqual(0);
		expect(findMostFrequentNumber([false, true])).toEqual(0);
	});
	it('should return correct value when numberlist is correct', () => {
		expect(findMostFrequentNumber([1])).toEqual(1);
		expect(findMostFrequentNumber([1, 2, 3, 2])).toEqual(2);
		expect(findMostFrequentNumber([1, 2, 3, 2, 3, 4])).toEqual(2);
	});
});
