import { hasAlice } from './array-check-07-HasAlice';
describe('hasAlice(studentList)', () => {
	it('should return false when studentList is empty or is not array', () => {
		expect(hasAlice([])).toBe(false);
		expect(hasAlice({})).toBe(false);
		expect(hasAlice('')).toBe(false);
		expect(hasAlice(0)).toBe(false);
	});
	it('should return false when studentList is dont has alice gender female', () => {
		expect(
			hasAlice([
				{ id: 1, name: 'Alice', gender: 'male' },
				{ id: 2, name: 'aliCE', gender: 'feale' },
				{ id: 3, name: 'Easy Frontend', gender: 'male' },
			])
		).toBe(false);
	});
	it('should return true when studentList is has alice gender female', () => {
		expect(
			hasAlice([
				{ id: 1, name: 'Alice', gender: 'male' },
				{ id: 2, name: 'aliCE', gender: 'female' },
				{ id: 3, name: 'Easy Frontend', gender: 'male' },
			])
		).toBe(true);
	});
});
