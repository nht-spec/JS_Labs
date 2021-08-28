import { statisticsCharacters } from './string-03-StatisticsCharacters';
describe('statisticsCharacters(str)', () => {
	test('should return empty object when str is empty or str is not a string', () => {
		expect(statisticsCharacters([])).toEqual({});
		expect(statisticsCharacters(0)).toEqual({});
		expect(statisticsCharacters({})).toEqual({});
		expect(statisticsCharacters('')).toEqual({});
	});
	test('should return object when str dont has distance ', () => {
		expect(statisticsCharacters('abc')).toEqual({
			a: 1,
			b: 1,
			c: 1,
		});
	});
	test('should return object when str has distance ', () => {
		expect(statisticsCharacters('abc   a')).toEqual({
			a: 2,
			b: 1,
			c: 1,
			space: 3,
		});
	});
});
