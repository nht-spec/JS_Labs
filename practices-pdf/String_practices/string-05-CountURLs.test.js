import { countURLs } from './string-05-CountURLs';
describe('countURLs(str)', () => {
	test('should return 0 when str is empty or str is not a string', () => {
		expect(countURLs(0)).toBe(0);
		expect(countURLs('')).toBe(0);
		expect(countURLs({})).toBe(0);
		expect(countURLs([])).toBe(0);
	});
	test('should return 0 when str dont has protocol://domain.com', () => {
		expect(countURLs('https:/ezfrontend.com')).toBe(0);
		expect(countURLs('http:/ezfrontend.com')).toBe(0);
		expect(countURLs('ws:/ezfrontend.com')).toBe(0);
		expect(countURLs('wss:/ezfrontend.com')).toBe(0);
		expect(countURLs('w21://ezfrontend.com')).toBe(0);
		expect(countURLs('htsp://ezfrontend.com')).toBe(0);
	});
	test('should return 0 when str is not correct', () => {
		expect(countURLs('https://e.com')).toBe(0);
		expect(countURLs('http://ez.com')).toBe(0);
		expect(countURLs('ws://e .com')).toBe(0);
		expect(countURLs('wss://.com')).toBe(0);
	});
	test('should return correct number when str is correct', () => {
		expect(countURLs('https://ezfrontend.com.com')).toBe(1);
		expect(countURLs('http://frontend.com')).toBe(1);
		expect(countURLs('ws://frontend.com')).toBe(1);
		expect(countURLs('wss://front.com')).toBe(1);
		expect(
			countURLs(
				'wss://front.com or wss://front.com or http://frontend.com or https://frontend.com'
			)
		).toBe(4);
	});
});
