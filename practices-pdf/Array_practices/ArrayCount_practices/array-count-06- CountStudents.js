export function countStudents(studentList, avgMark) {
	if (
		!Array.isArray(studentList) ||
		studentList.length === 0 ||
		typeof avgMark !== 'number' ||
		avgMark < 0
	) {
		return 0;
	}
	let checkValue = [];
	let checkValid = 0;
	studentList.forEach((student) => {
		if (student.marks === undefined) {
			return checkValid;
		}
		let sumMarks = 0;
		const { marks } = student;
		const length = Object.keys(marks).length;
		Object.values(marks).forEach((x) => {
			if (x > 0 && x <= 10) {
				sumMarks += x;
			}
		});
		if (sumMarks / length >= avgMark) {
			checkValue.push(student);
		}
	});
	if (checkValue.length === 0) {
		return 0;
	}
	return checkValue.length;
}
