import { hasStudent } from './array-check-06-HasStudent';
describe('Name of the hasStudent(studentList, studentId)', () => {
	it('should return false when studentList is empty or is not array and studentId is not a number', () => {
		expect(hasStudent([], '')).toBe(false);
		expect(hasStudent({}, [])).toBe(false);
		expect(hasStudent('', -1)).toBe(false);
		expect(hasStudent(0, {})).toBe(false);
		expect(hasStudent([], {})).toBe(false);
	});
	it('should return false when studentList dont has correct studentId', () => {
		expect(
			hasStudent(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Easy' },
					{ id: 3, name: 'Easy' },
				],
				0
			)
		).toBe(false);
		expect(
			hasStudent(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Easy' },
				],
				4
			)
		).toBe(false);
		expect(
			hasStudent(
				[
					{ id: 1, name: 'Easy' },
					{ id: 4, name: 'Easy' },
				],
				5
			)
		).toBe(false);
	});
	it('should return true when studentList has correct studentId', () => {
		expect(
			hasStudent(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Easy' },
					{ id: 3, name: 'Easy' },
				],
				2
			)
		).toBe(true);
		expect(
			hasStudent(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Easy' },
				],
				1
			)
		).toBe(true);
		expect(
			hasStudent(
				[
					{ id: 1, name: 'Easy' },
					{ id: 4, name: 'Easy' },
				],
				4
			)
		).toBe(true);
	});
});
