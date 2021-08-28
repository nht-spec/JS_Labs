import { countWords } from './string-01-CountWords';
describe('countWords(str)', () => {
	test('should return 0 when str is empty or is not a string', () => {
		expect(countWords('')).toBe(0);
		expect(countWords(' ')).toBe(0);
		expect(countWords({})).toBe(0);
		expect(countWords(0)).toBe(0);
		expect(countWords([])).toBe(0);
	});
	test('should return length of str when str is has words', () => {
		expect(countWords('thinh hoang')).toBe(2);
		expect(countWords('nguyen hoang thinh')).toBe(3);
		expect(countWords('a')).toBe(1);
		expect(countWords('a  b   c d   ')).toBe(4);
	});
});
