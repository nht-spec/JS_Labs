import { countEmails } from './string-04-CountEmails';
describe(' countEmails(str)', () => {
	test('should return 0 when str is not string or str is empty ', () => {
		expect(countEmails(0)).toBe(0);
		expect(countEmails('')).toBe(0);
		expect(countEmails({})).toBe(0);
		expect(countEmails([])).toBe(0);
	});
	test('should return 0 when str is not correct email', () => {
		expect(countEmails('my email should be a@a.com')).toBe(0);
		expect(countEmails('my email should be @ bla .com')).toBe(0);
		expect(countEmails('my email should be aa@a.com')).toBe(0);
	});
	test('should return correct number when str is correct email', () => {
		expect(countEmails('my email should be abc@super.com')).toBe(1);
		expect(
			countEmails('my email should be easy@frontend.com or easy@frontend.com.vn')
		).toBe(2);
		expect(
			countEmails(
				'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn'
			)
		).toBe(3);
	});
});
