import { hasEasyFrontend } from './array-check-03-HasEasyFrontend';
describe('hasEasyFrontend(wordList)', () => {
	it('should return false when wordList is empty or is not array', () => {
		expect(hasEasyFrontend([])).toBe(false);
		expect(hasEasyFrontend(0)).toBe(false);
		expect(hasEasyFrontend('')).toBe(false);
		expect(hasEasyFrontend({})).toBe(false);
	});

	it('should return false when wordList is not found "easy""frontend"', () => {
		expect(hasEasyFrontend(['easy', ''])).toBe(false);
		expect(hasEasyFrontend(['', ''])).toBe(false);
		expect(hasEasyFrontend(['easy', 'front'])).toBe(false);
		expect(hasEasyFrontend(['easy'])).toBe(false);
	});
	it('should return true when wordList is found "easy""frontend"', () => {
		expect(hasEasyFrontend(['easy', 'frontend'])).toBe(true);
		expect(hasEasyFrontend(['easy frontend'])).toBe(true);
		expect(hasEasyFrontend(['easy frontend', ''])).toBe(true);
		expect(hasEasyFrontend(['', 'easy frontend'])).toBe(true);
	});
});
