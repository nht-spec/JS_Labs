import { statisticsNumbers } from './logic-03-StatisticsNumbers';
describe(' statisticsNumbers(numberList)', () => {
	it('should return {} when numberList is empty or is not array', () => {
		expect(statisticsNumbers([])).toEqual({});
		expect(statisticsNumbers('')).toEqual({});
		expect(statisticsNumbers({})).toEqual({});
		expect(statisticsNumbers(0)).toEqual({});
	});
	it('should return {} when numberList is not correct', () => {
		expect(statisticsNumbers([{ test: 1 }, '12', [1]])).toEqual({});
	});
	it('should return correct value when numberList is correct', () => {
		expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({ 1: 3, 2: 2, 3: 1 });
		expect(statisticsNumbers([-1, -2, -3])).toEqual({ '-1': 1, '-2': 1, '-3': 1 });
	});
});
