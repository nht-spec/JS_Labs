import { findLastUrl } from './array-find-08-FindLastUr';
describe('findLastUrl(strList)', () => {
	it('should return undefined when strList is empty or is not array', () => {
		expect(findLastUrl([])).toBe(undefined);
		expect(findLastUrl(0)).toBe(undefined);
		expect(findLastUrl('')).toBe(undefined);
		expect(findLastUrl({})).toBe(undefined);
	});
	it('should return undefined when strList is wrong', () => {
		expect(findLastUrl(['htt://google.com'])).toBe(undefined);
		expect(findLastUrl([123, 'htts://google.com'])).toBe(undefined);
		expect(findLastUrl(['ws://google.com.vc'])).toBe(undefined);
	});
	it('should return correct email when strList is correct', () => {
		expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe(
			'wss://chat.sample.com'
		);
		expect(findLastUrl(['https://google.com', 'http:/chat.sample.com'])).toBe(
			'https://google.com'
		);
		expect(
			findLastUrl([
				'https://google.com',
				'http:/chat.sample.com',
				'https://google.com.vn',
			])
		).toBe('https://google.com.vn');
	});
});
