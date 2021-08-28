import { countStudents } from './array-count-06- CountStudents';
describe('countStudents(studentList, avgMark)', () => {
	it('should return 0 when studentList is empty or is not array and avgMark is not number or < 0 ', () => {
		expect(countStudents([], -1)).toEqual(0);
		expect(countStudents({}, '')).toEqual(0);
		expect(countStudents('', {})).toEqual(0);
		expect(countStudents(0, [])).toEqual(0);
	});
	it('should return 0 when studentList is not correct', () => {
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice' },
					{ id: 2, name: 'Bob' },
				],
				4
			)
		).toEqual(0);
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice', marks: { math: 11 } },
					{ id: 2, name: 'Bob', marks: { math: 12 } },
				],
				12
			)
		).toEqual(0);
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice', marks: { math: -1 } },
					{ id: 2, name: 'Bob', marks: { math: -2 } },
				],
				6
			)
		).toEqual(0);
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice', marks: { math: -1 } },
					{ id: 2, name: 'Bob', marks: { math: -2 } },
				],
				6
			)
		).toEqual(0);
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice', marks: { math: 5 } },
					{ id: 2, name: 'Bob', marks: { math: 5 } },
				],
				9
			)
		).toEqual(0);
	});
	it('should return correct value when studentList is correct', () => {
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice', marks: { math: 8 } },
					{ id: 2, name: 'Bob', marks: { math: 9 } },
				],
				7
			)
		).toEqual(2);
		expect(
			countStudents(
				[
					{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
					{ id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
				],
				7
			)
		).toEqual(1);
	});
});
