import { countWords } from './array-count-03-CountWords';
describe('countWords(wordList,n)', () => {
	it('should return 0  when wordList is empty or is not array, n is not number or < 0', () => {
		expect(countWords([], [])).toEqual(0);
		expect(countWords({}, {})).toEqual(0);
		expect(countWords('', '')).toEqual(0);
		expect(countWords(0, -1)).toEqual(0);
		expect(countWords('', -1)).toEqual(0);
		expect(countWords(0, [])).toEqual(0);
	});
	it('should return 0  when wordList is dont has word >= n', () => {
		expect(countWords(['t', ''], 2)).toEqual(0);
		expect(countWords(['t', 'thinh'], 7)).toEqual(0);
		expect(countWords(['t', 1234567, 'thinh'], 7)).toEqual(0);
		expect(countWords(['t12', 1234567, 'thinhqw'], 12)).toEqual(0);
	});
	it('should return correct word when wordList is has word >= n', () => {
		expect(countWords(['easy', 'frontend'], 4)).toEqual(2);
		expect(countWords(['easy', 'frontend'], 5)).toEqual(1);
		expect(countWords(['easyfrontend', 'frontend', 'easy'], 4)).toEqual(3);
	});
});
