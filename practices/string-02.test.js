import { statisticsWords, statisticsWords2 } from './string-02';

describe('statisticsWrods(str)', () => {
	it('should return empty object in case str is empty', () => {
		expect(statisticsWords('')).toEqual({});
	});

	it("should return correct statistics when str doesn't have redundant spaces", () => {
		expect(statisticsWords('easy frontend is very easy')).toEqual({
			easy: 2,
			frontend: 1,
			is: 1,
			very: 1,
		});
	});
	it('should return correct statistics when str has redundant spaces', () => {
		expect(statisticsWords('  easy   frontend   is   very   easy')).toEqual({
			easy: 2,
			frontend: 1,
			is: 1,
			very: 1,
		});
	});
});

describe('statisticsWrods(str)', () => {
	it('should return empty object in case str is empty', () => {
		expect(statisticsWords2('')).toEqual({});
	});

	it("should return correct statistics when str doesn't have redundant spaces", () => {
		expect(statisticsWords2('easy frontend is very easy')).toEqual({
			easy: 2,
			frontend: 1,
			is: 1,
			very: 1,
		});
	});
	it('should return correct statistics when str has redundant spaces', () => {
		expect(statisticsWords2('  easy   frontend   is   very   easy')).toEqual({
			easy: 2,
			frontend: 1,
			is: 1,
			very: 1,
		});
	});
});
