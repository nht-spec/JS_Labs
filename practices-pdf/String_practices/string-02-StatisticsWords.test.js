import { statisticsWords } from './string-02-StatisticsWords';
describe('statisticsWords(str)', () => {
	test('should return false when str is not a string ', () => {
		expect(statisticsWords(0)).toBe(false);
		expect(statisticsWords([])).toBe(false);
		expect(statisticsWords({})).toBe(false);
		expect(statisticsWords('')).toBe(false);
	});
	test('should return correct object when str is has a string ', () => {
		expect(statisticsWords('easy frontend easy hoang thinh')).toEqual({
			easy: 2,
			frontend: 1,
			hoang: 1,
			thinh: 1,
		});
	});
	test('should return correct object when str is has a string and has a distance  ', () => {
		expect(statisticsWords('easy    frontend   easy    hoang   thinh')).toEqual({
			easy: 2,
			frontend: 1,
			hoang: 1,
			thinh: 1,
		});
	});
});
