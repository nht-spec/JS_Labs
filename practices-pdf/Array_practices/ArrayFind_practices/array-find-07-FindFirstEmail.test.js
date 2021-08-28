import { findFirstEmail } from './array-find-07-FindFirstEmail';
describe('findFirstEmail(strList)', () => {
	it('should return undefined when strList is empty or is not array', () => {
		expect(findFirstEmail([])).toBe(undefined);
		expect(findFirstEmail({})).toBe(undefined);
		expect(findFirstEmail('')).toBe(undefined);
		expect(findFirstEmail(0)).toBe(undefined);
	});
	it('should return undefined when strList is wrong', () => {
		expect(findFirstEmail(['abc@easy.fontend'])).toBe(undefined);
		expect(findFirstEmail(['abc@easy.fontend', 'abc@easy'])).toBe(undefined);
		expect(findFirstEmail([123])).toBe(undefined);
		expect(findFirstEmail(['as @.thinh'])).toBe(undefined);
	});
	it('should return undefined when strList is not has a correct email', () => {
		expect(findFirstEmail(['ab@easy.com'])).toBe(undefined);
		expect(findFirstEmail(['abc@ey.vn', 'a@gmail.com'])).toBe(undefined);
		expect(findFirstEmail(['thinh@gm.com.vn'])).toBe(undefined);
	});
	it('should return correct email when strList is has a correct email', () => {
		expect(findFirstEmail(['abc@easy.fontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
		expect(findFirstEmail(['abc@ey.vn', 'hoangthinh@gmail.com.vn'])).toBe(
			'hoangthinh@gmail.com.vn'
		);
		expect(findFirstEmail(['hoangthinh@thinh.vn'])).toBe('hoangthinh@thinh.vn');
	});
});
