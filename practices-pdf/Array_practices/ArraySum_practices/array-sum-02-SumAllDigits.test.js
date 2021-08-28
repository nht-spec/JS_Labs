import { sumAllDigits } from './array-sum-02-SumAllDigits';
describe('sumAllDigits(numberList)', () => {
	it('should return 0 when numberList is empty or is not array', () => {
		expect(sumAllDigits([])).toEqual(0);
		expect(sumAllDigits({})).toEqual(0);
		expect(sumAllDigits('')).toEqual(0);
		expect(sumAllDigits(0)).toEqual(0);
	});
	it('should return 0 when value of numberList is not number', () => {
		expect(sumAllDigits(['', { value: 1 }, [1, 2, 'th']])).toEqual(0);
		expect(sumAllDigits(['sds1', { value: 1 }, [1, 2, 'th']])).toEqual(0);
	});
	it('should return correct number when numberList is correct', () => {
		expect(sumAllDigits([4])).toEqual(4);
		expect(sumAllDigits([123, 4])).toEqual(10);
		expect(sumAllDigits([1234, 55])).toEqual(20);
	});
});
