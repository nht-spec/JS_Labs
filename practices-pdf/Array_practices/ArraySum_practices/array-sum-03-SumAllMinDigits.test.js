import { sumAllMinDigits } from './array-sum-03-SumAllMinDigits';
describe(' sumAllMinDigits(numberList)', () => {
	it('should return 0 when numberList is empty or is not array ', () => {
		expect(sumAllMinDigits([])).toEqual(0);
		expect(sumAllMinDigits({})).toEqual(0);
		expect(sumAllMinDigits('')).toEqual(0);
		expect(sumAllMinDigits(0)).toEqual(0);
	});
	it('should return 0 when value of numberList is not a number', () => {
		expect(sumAllMinDigits(['123', { key: 1 }, ['r1']])).toEqual(0);
		expect(sumAllMinDigits([[2], '', ['r1']])).toEqual(0);
		expect(sumAllMinDigits([[2], { 2: 2 }, ['r1']])).toEqual(0);
	});
	it('should return correct number when numberList is correct', () => {
		expect(sumAllMinDigits([123])).toEqual(1);
		expect(sumAllMinDigits([123, 532])).toEqual(3);
		expect(sumAllMinDigits([536, 532])).toEqual(5);
		expect(sumAllMinDigits([533, 222])).toEqual(5);
		expect(sumAllMinDigits([1111, 11])).toEqual(2);
	});
});
