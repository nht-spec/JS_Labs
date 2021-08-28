import { findStudentById } from './array-find-09-FindStudentById';
describe('findStudentById(studentList, studentId)', () => {
	it('should return -1 when studentList is empty or is not array and studentId is not number or < 0', () => {
		expect(findStudentById([], '')).toBe(-1);
		expect(findStudentById({}, -1)).toBe(-1);
		expect(findStudentById('', 0)).toBe(-1);
		expect(findStudentById(0, {})).toBe(-1);
		expect(findStudentById([], [])).toBe(-1);
	});
	it('should return -1 when studentList wrong', () => {
		expect(
			findStudentById(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Frontend' },
				],
				3
			)
		).toBe(-1);
		expect(
			findStudentById(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Frontend' },
				],
				0
			)
		).toBe(-1);
		expect(
			findStudentById(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Frontend' },
					{ id: 3, name: 'Easy' },
					{ id: 4, name: 'Frontend' },
				],
				5
			)
		).toBe(-1);
	});
	it('should return 0 when studentList correct', () => {
		expect(
			findStudentById(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Frontend' },
				],
				2
			)
		).toBe(1);
		expect(
			findStudentById(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Frontend' },
				],
				1
			)
		).toBe(0);
		expect(
			findStudentById(
				[
					{ id: 1, name: 'Easy' },
					{ id: 2, name: 'Frontend' },
					{ id: 3, name: 'Easy' },
					{ id: 4, name: 'Frontend' },
				],
				3
			)
		).toBe(2);
	});
});
