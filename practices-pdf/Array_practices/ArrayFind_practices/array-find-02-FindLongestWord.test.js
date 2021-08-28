import { findLongestWord } from './array-find-02-FindLongestWord';
describe('findLongestWord(wordList)', () => {
	it('should return empty string when wordList empty or not array', () => {
		expect(findLongestWord([])).toBe('');
		expect(findLongestWord({})).toBe('');
		expect(findLongestWord('')).toBe('');
		expect(findLongestWord(0)).toBe('');
	});
	it('should return empty string when wordList is not correct', () => {
		expect(findLongestWord(['', 'thinh hoang', 't h'])).toBe('');
		expect(findLongestWord([0, 'a ss ', true])).toBe('');
		expect(findLongestWord([12, 'te st', false])).toBe('');
		expect(findLongestWord('q w', undefined)).toBe('');
	});
	it('should return correct string when wordList is correct', () => {
		expect(findLongestWord(['super', 'cool'])).toBe('super');
		expect(findLongestWord(['super', 'super cool'])).toBe('super');
		expect(findLongestWord(['thi d', '1', '13'])).toBe('13');
	});
});
