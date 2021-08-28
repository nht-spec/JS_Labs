import { removeStudentById } from './array-cd-03-RemoveStudentById';
describe('removeStudentById(studentList, studentId) ', () => {
	it('should return [] when studentList is emtpy or is not array and studentId is not number', () => {
		expect(removeStudentById([], [])).toEqual([]);
		expect(removeStudentById({}, {})).toEqual([]);
		expect(removeStudentById('', '')).toEqual([]);
		expect(removeStudentById(0, -1)).toEqual([]);
	});
	it('should return [] when studentList dont has ID', () => {
		expect(removeStudentById([{ name: 'Alice' }, { name: 'Bob' }], 1)).toEqual([]);
		expect(
			removeStudentById(
				[
					{ id: { id: 1 }, name: 'Alice' },
					{ id: '2', name: 'Bob' },
					{ id: [2], name: 'Bob' },
				],
				2
			)
		).toEqual([]);
	});
	it('should return correct value when studentList has ID', () => {
		expect(
			removeStudentById(
				[
					{ id: 1, name: 'Alice' },
					{ id: 2, name: 'Bob' },
				],
				1
			)
		).toEqual([{ id: 2, name: 'Bob' }]);
		expect(
			removeStudentById(
				[
					{ id: 1, name: 'Alice' },
					{ id: 2, name: 'Bob' },
					{ id: 3, name: 'Bob' },
					{ id: 4, name: 'Bob' },
				],
				3
			)
		).toEqual([
			{ id: 1, name: 'Alice' },
			{ id: 2, name: 'Bob' },
			{ id: 4, name: 'Bob' },
		]);
		expect(
			removeStudentById(
				[
					{ id: 1, name: 'Alice' },
					{ id: 2, name: 'Bob' },
				],
				3
			)
		).toEqual([
			{ id: 1, name: 'Alice' },
			{ id: 2, name: 'Bob' },
		]);
	});
});
